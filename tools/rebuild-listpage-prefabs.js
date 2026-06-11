'use strict';

const http = require('http');

const PORT = 3456;
const ITEM_URL = 'db://assets/resources/prefab/ListPageView/ListPageTestItem.prefab';
const PANEL_URL = 'db://assets/resources/prefab/ListPageView/ListPageTestPanel.prefab';
const LIST_PAGE_VIEW_SCRIPT = 'db://assets/script/com/ListPage/ListPageView.ts';
const SCROLL_CONTENT_PATH = 'ListPageTestPanel/recordScroll/view/content';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function callTool(name, args) {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify({ name, arguments: args });
        const req = http.request({
            hostname: '127.0.0.1',
            port: PORT,
            path: '/call-tool',
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
            timeout: 180000,
        }, (res) => {
            let data = '';
            res.on('data', (c) => { data += c; });
            res.on('end', () => {
                try {
                    const j = JSON.parse(data);
                    const text = j.content && j.content[0] && j.content[0].text;
                    if (j.isError) {
                        reject(new Error(text || data));
                        return;
                    }
                    if (!text) {
                        resolve(j);
                        return;
                    }
                    try {
                        resolve(JSON.parse(text));
                    } catch {
                        resolve(text);
                    }
                } catch (e) {
                    reject(e);
                }
            });
        });
        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('HTTP timeout: ' + name)); });
        req.write(body);
        req.end();
    });
}

async function createItemPrefab() {
    console.log('1. prefab_create_new ListPageTestItem');
    const res = await callTool('prefab_create_new', {
        url: ITEM_URL,
        rootNode: {
            name: 'ListPageTestItem',
            width: 680,
            height: 88,
            children: [
                { name: 'bg', type: 'sprite', width: 680, height: 88, color: { r: 42, g: 42, b: 62, a: 255 } },
                { name: 'indexTxt', type: 'label', x: -280, y: 0, string: '#0', fontSize: 22, color: { r: 170, g: 170, b: 170, a: 255 } },
                { name: 'timeTxt', type: 'label', x: -80, y: 0, string: '00:00', fontSize: 24 },
                { name: 'incomeTxt', type: 'label', x: 200, y: 0, string: '+0', fontSize: 26, color: { r: 255, g: 215, b: 0, a: 255 } },
            ],
            scripts: [{
                scriptUrl: 'db://assets/script/test/ListPageTestItem.ts',
                props: { indexTxt: 'indexTxt', timeTxt: 'timeTxt', incomeTxt: 'incomeTxt' },
            }],
        },
    });
    console.log(res.message || res);
}

async function createPanelPrefab() {
    console.log('2. prefab_create_new ListPageTestPanel (ScrollView + ListPageView via components)');
    const res = await callTool('prefab_create_new', {
        url: PANEL_URL,
        rootNode: {
            name: 'ListPageTestPanel',
            width: 720,
            height: 1080,
            children: [
                { name: 'bg', type: 'sprite', width: 720, height: 1080, color: { r: 20, g: 20, b: 30, a: 255 } },
                { name: 'statusLabel', type: 'label', x: 0, y: 480, string: 'status', fontSize: 22, width: 700, height: 40 },
                {
                    name: 'btnRefresh',
                    type: 'button',
                    x: -160,
                    y: 400,
                    width: 200,
                    height: 64,
                    string: '重刷数据',
                    fontSize: 24,
                    clickHandler: {
                        handler: 'onClickRefresh',
                        target: 'ListPageTestPanel',
                        component: 'ListPageTestPanel',
                        scriptUrl: 'db://assets/script/test/ListPageTestPanel.ts',
                    },
                },
                {
                    name: 'btnInsert',
                    type: 'button',
                    x: 160,
                    y: 400,
                    width: 200,
                    height: 64,
                    string: '插入数据',
                    fontSize: 24,
                    clickHandler: {
                        handler: 'onClickInsert',
                        target: 'ListPageTestPanel',
                        component: 'ListPageTestPanel',
                        scriptUrl: 'db://assets/script/test/ListPageTestPanel.ts',
                    },
                },
                {
                    name: 'recordScroll',
                    width: 680,
                    height: 600,
                    y: -80,
                    children: [
                        {
                            name: 'view',
                            width: 680,
                            height: 600,
                            components: [{ type: 'cc.Mask' }],
                            children: [
                                { name: 'content', width: 680, height: 600, anchorY: 1 },
                            ],
                        },
                    ],
                    components: [
                        {
                            type: 'cc.ScrollView',
                            properties: {
                                vertical: true,
                                horizontal: false,
                                content: { nodePath: SCROLL_CONTENT_PATH },
                            },
                        },
                        {
                            scriptUrl: LIST_PAGE_VIEW_SCRIPT,
                            properties: {
                                layout: 0,
                                gridColumnCount: 1,
                                spacingX: 8,
                                spacingY: 8,
                                paddingTop: 8,
                                paddingBottom: 8,
                                bufferCount: 2,
                                loadMoreThreshold: 80,
                                tmpPrefab: { url: ITEM_URL },
                            },
                        },
                    ],
                },
            ],
            scripts: [{
                scriptUrl: 'db://assets/script/test/ListPageTestPanel.ts',
                props: { statusLabel: 'statusLabel' },
            }],
        },
    });
    console.log(res.message || res);
}

async function main() {
    await createItemPrefab();
    await createPanelPrefab();
    await callTool('editor_refresh', { path: 'db://assets/resources/prefab/ListPageView/' });
    await sleep(800);
    console.log('Done. Prefabs created via ai_prefab Scene API (assetdb.copy + prefab_open + populate + save).');
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
