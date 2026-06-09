/**
 * Captures https://cursor.com/cn/docs (and linked /cn/docs/* pages) as A4-sized PNGs.
 * Output: docs/NN-docs-slug.png (multi-chunk pages: NN-docs-slug-pM.png)
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "docs");

const BASE = "https://cursor.com";
const START = `${BASE}/cn/docs`;

/** Optional: set to e.g. `/cn/docs/account/teams/admin-api` to capture one page only */
const ONLY_CN_DOCS_PATH = (process.env.ONLY_CN_DOCS_PATH || "").replace(/\/$/, "");

/** A4 @ ~96 CSS px/in (210mm x 297mm) */
const A4_W = 794;
const A4_H = 1123;

/** Page CSS pixels → PNG uses `DEVICE_SCALE_FACTOR` device px per CSS px */
const DEVICE_SCALE_FACTOR = 2;

/**
 * Outer white margin applied to EVERY tile after capture.
 * `<main>` padding only affects scroll start/end, not intermediate pages — post-process is reliable.
 */
const EDGE_MARGIN_CSS_PX = 100;

/**
 * Strip video embeds before measuring / screenshots (margins: `saveClippedPagePngWithMargins`).
 */
async function preparePageForCapture(page) {
  await page.evaluate(() => {
    const videoIframe = (src) =>
      /youtube\.com|youtube-nocookie\.com|youtu\.be|vimeo\.com|player\.vimeo|bilibili\.com|bilivideo/i.test(
        src || ""
      );

    for (const v of document.querySelectorAll("video")) {
      v.remove();
    }
    for (const f of document.querySelectorAll("iframe")) {
      if (videoIframe(f.getAttribute("src"))) f.remove();
    }
  });

  await page.waitForTimeout(400);
}

async function saveClippedPagePngWithMargins(page, clip, outPath) {
  const buf = await page.screenshot({
    type: "png",
    clip,
    scale: "device",
  });
  const padPx = Math.max(0, Math.round(EDGE_MARGIN_CSS_PX * DEVICE_SCALE_FACTOR));
  await sharp(buf)
    .extend({
      top: padPx,
      bottom: padPx,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(outPath);
}

function slugifyTitle(title) {
  const t = (title || "page")
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
  return t || "page";
}

function pathToSlug(u) {
  try {
    const p = new URL(u).pathname.replace(/^\/cn\/docs\/?/, "").replace(/\/$/, "");
    return p ? slugifyTitle(p.replace(/\//g, "-")) : "index";
  } catch {
    return "page";
  }
}

async function collectDocLinks(page) {
  return page.evaluate(() => {
    const set = new Set();
    for (const a of document.querySelectorAll('a[href^="/cn/docs"]')) {
      const href = a.getAttribute("href");
      if (!href || href.includes("#")) continue;
      const path = href.split("#")[0];
      if (path.length < "/cn/docs".length) continue;
      set.add(path);
    }
    return [...set].sort();
  });
}

async function discoverAllLinks(browser) {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const all = new Set(["/cn/docs"]);

  await page.goto(START, { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForTimeout(2000);

  let batch = await collectDocLinks(page);
  batch.forEach((p) => all.add(p));

  const queue = [...batch];
  const seen = new Set(queue);

  while (queue.length) {
    const p = queue.shift();
    const url = `${BASE}${p}`;
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(800);
      const more = await collectDocLinks(page);
      for (const m of more) {
        if (!seen.has(m)) {
          seen.add(m);
          all.add(m);
          queue.push(m);
        }
      }
    } catch (e) {
      console.warn("skip (load error):", url, e.message);
    }
  }

  await ctx.close();
  return [...all].sort();
}

/**
 * Cursor docs render long articles inside <main class="... overflow-auto">,
 * so window scrollHeight ≈ viewport. Scroll <main> and clip to its box.
 */
async function getScrollPlan(page) {
  return page.evaluate(({ maxW }) => {
    const main = document.querySelector("main");
    if (main && main.scrollHeight > main.clientHeight + 2) {
      const r = main.getBoundingClientRect();
      return {
        type: "main",
        scrollHeight: main.scrollHeight,
        clientHeight: main.clientHeight,
        rect: { x: r.x, y: r.y, width: r.width, height: r.height },
      };
    }
    const de = document.documentElement;
    const sh = Math.max(de.scrollHeight, document.body?.scrollHeight || 0, de.clientHeight);
    return {
      type: "window",
      scrollHeight: sh,
      clientHeight: window.innerHeight,
      rect: { x: 0, y: 0, width: Math.min(maxW, window.innerWidth), height: window.innerHeight },
    };
  }, { maxW: A4_W });
}

/**
 * Measure atomic blocks inside <main> (scroll coords) so pagination avoids slicing
 * through code fences / tables unless they’re taller than one viewport.
 */
async function measureMainForPagination(page) {
  return page.evaluate(() => {
    const main = document.querySelector("main");
    if (!main) return null;

    main.scrollTop = 0;
    const prose = main.querySelector(".prose") || main;
    const mEdge = main.getBoundingClientRect().top;

    const pushFromEl = (el, blocks) => {
      const r = el.getBoundingClientRect();
      if (r.height < 2) return;
      const top = r.top - mEdge + main.scrollTop;
      const bottom = r.bottom - mEdge + main.scrollTop;
      blocks.push({ top, bottom });
    };

    const blocks = [];
    const selAtoms =
      "pre, table, aside, blockquote, figure, hr, h1, h2, h3, h4, h5, h6, [role='separator']";
    for (const el of prose.querySelectorAll(selAtoms)) {
      pushFromEl(el, blocks);
    }

    for (const el of prose.querySelectorAll("div[data-code-block], [data-language], div.overflow-x-auto")) {
      if (el.querySelector("pre")) continue;
      pushFromEl(el, blocks);
    }

    const sorted = [...blocks].sort((a, b) => a.top - b.top || a.bottom - b.bottom);

    const dedup = [];
    const eps = 1;
    for (const b of sorted) {
      const last = dedup[dedup.length - 1];
      if (last && Math.abs(b.top - last.top) < eps && Math.abs(b.bottom - last.bottom) < eps) continue;
      dedup.push(b);
    }

    return {
      scrollHeight: main.scrollHeight,
      clientHeight: main.clientHeight,
      blocks: dedup,
    };
  });
}

function mergeBlockIntervals(blocks) {
  if (!blocks.length) return [];
  const a = [...blocks].sort((x, y) => x.top - y.top || x.bottom - y.bottom);
  const out = [];
  const gapTol = 4;
  for (const b of a) {
    const last = out[out.length - 1];
    if (last && b.top <= last.bottom + gapTol) last.bottom = Math.max(last.bottom, b.bottom);
    else out.push({ top: b.top, bottom: b.bottom });
  }
  return out;
}

function extendForOpenBlocks(S, E, VH, blocks) {
  let e = E;
  for (const b of blocks) {
    if (b.bottom <= S) continue;
    if (b.top > S) continue;
    if (b.bottom <= e) continue;
    const blockH = b.bottom - b.top;
    if (blockH > VH) {
      e = Math.min(S + VH, e);
      continue;
    }
    e = Math.max(e, Math.min(S + VH, b.bottom));
  }
  return e;
}

function avoidBadCuts(S, E, VH, blocks) {
  let e = E;
  for (const b of blocks) {
    if (b.bottom <= S) continue;
    if (b.top >= e) continue;
    if (!(b.top > S && e > b.top && e < b.bottom)) continue;
    const blockH = b.bottom - b.top;
    if (blockH > VH) continue;
    e = b.top;
  }
  return e;
}

function computeUniformPages(SH, VH) {
  const pages = [];
  let S = 0;
  while (S < SH - 0.5) {
    const end = Math.min(S + VH, SH);
    const clip = Math.max(1, Math.round(end - S));
    pages.push({ scrollTop: Math.round(S), clipHeight: clip });
    S = end;
  }
  return pages;
}

function computeSmartPages(SH, VH, rawBlocks) {
  const VHf = Math.max(8, VH);
  const merged = mergeBlockIntervals(rawBlocks);
  /** @type {{ scrollTop: number, clipHeight: number }[]} */
  const pages = [];
  let S = 0;
  let guard = 0;

  while (S < SH - 0.5 && guard++ < 20000) {
    const E0 = Math.min(S + VHf, SH);
    let E = E0;

    if (E < SH - 0.5) {
      let stable = false;
      for (let pass = 0; pass < 32 && !stable; pass++) {
        const prevE = E;
        E = extendForOpenBlocks(S, E, VHf, merged);
        E = avoidBadCuts(S, E, VHf, merged);
        E = extendForOpenBlocks(S, E, VHf, merged);
        stable = prevE === E;
      }

      let last = E;
      for (let i = 0; i < 8; i++) {
        const ne = avoidBadCuts(S, last, VHf, merged);
        const ne2 = extendForOpenBlocks(S, ne, VHf, merged);
        last = avoidBadCuts(S, ne2, VHf, merged);
      }
      E = last;
    }

    const clipFloat = Math.min(VHf, Math.max(1, E - S));
    const clipHeight = Math.max(1, Math.round(Math.min(VHf, clipFloat)));
    pages.push({ scrollTop: Math.round(S), clipHeight });

    let nextS = E;
    if (nextS <= S + 0.5) nextS = Math.min(S + VHf, SH);
    S = nextS;
  }

  return pages.length ? pages : computeUniformPages(SH, VHf);
}

async function screenshotA4Chunks(page, fileBase) {
  const plan = await getScrollPlan(page);
  const { x, y, width, height } = plan.rect;
  const w = Math.min(width, A4_W);
  const outerClipCap = Math.min(height, A4_H);

  /** @type {{ scrollTop: number, clipHeight: number }[]} */
  let pages;

  if (plan.type === "main") {
    const m = await measureMainForPagination(page);
    const SH = m?.scrollHeight ?? plan.scrollHeight;
    const VH = m?.clientHeight ?? plan.clientHeight;
    const raw = m?.blocks ?? [];
    pages = raw.length ? computeSmartPages(SH, VH, raw) : computeUniformPages(SH, VH);
  } else {
    const VH = Math.min(plan.clientHeight, outerClipCap);
    pages = computeUniformPages(plan.scrollHeight, VH);
  }

  const paths = [];
  for (let i = 0; i < pages.length; i++) {
    const { scrollTop, clipHeight } = pages[i];
    await page.evaluate(
      ({ mode, scrollTop: st }) => {
        if (mode === "main") {
          const el = document.querySelector("main");
          if (el) el.scrollTop = st;
        } else window.scrollTo(0, st);
      },
      { mode: plan.type, scrollTop }
    );
    await page.waitForTimeout(350);

    const suffix = pages.length > 1 ? `-p${i + 1}` : "";
    const fname = `${fileBase}${suffix}.png`;
    const outPath = path.join(OUT_DIR, fname);

    const outer =
      plan.type === "main"
        ? Math.min(outerClipCap, clipHeight, plan.clientHeight)
        : Math.min(outerClipCap, clipHeight, plan.clientHeight, Math.max(1, plan.scrollHeight - scrollTop));

    await saveClippedPagePngWithMargins(page, { x, y, width: w, height: outer }, outPath);
    paths.push(outPath);
  }

  return paths;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  console.log("Discovering /cn/docs links…");
  const paths = await discoverAllLinks(browser);
  console.log("Found", paths.length, "pages");

  const ctx = await browser.newContext({
    viewport: { width: A4_W, height: A4_H },
    deviceScaleFactor: DEVICE_SCALE_FACTOR,
    locale: "zh-CN",
  });
  const page = await ctx.newPage();

  for (const p of paths) {
    if (ONLY_CN_DOCS_PATH && p.replace(/\/$/, "") !== ONLY_CN_DOCS_PATH) continue;

    const url = `${BASE}${p}`;
    const slug = pathToSlug(url);
    let title = slug;
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
      await page.waitForTimeout(1000);
      await preparePageForCapture(page);
      title = slugifyTitle(
        (await page.title()).replace(/\s*[|｜]\s*Cursor.*$/i, "").trim() || slug
      );
    } catch (e) {
      console.warn("Failed to load:", url, e.message);
      continue;
    }

    const num = String(paths.indexOf(p) + 1).padStart(2, "0");
    const baseName = `${num}-docs-${title}`;
    console.log(num, url, "->", baseName);
    await screenshotA4Chunks(page, baseName);
  }

  await ctx.close();
  await browser.close();
  console.log("Done. Output:", OUT_DIR);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
