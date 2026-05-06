# cursor_for_cocos_test

用于在 **Cocos Creator 2.4.6** 环境下，配合 **Cursor** 编辑器进行开发与协作的流程与能力验证（脚手架 / 脚本补全 / 重构 / 约定说明等）。

## 环境要求

| 组件 | 版本 |
|------|------|
| Cocos Creator | **2.4.6**（与仓库内 `project.json` 中的 `version` 一致） |
| 编辑器 | Cursor（本仓库主要在 Cursor 中编辑与迭代） |

> 建议使用与项目版本一致的 Creator，避免脚本 API、构建链与引擎行为差异。

## 打开项目

1. 启动 **Cocos Creator 2.4.6**。
2. 选择「打开项目」，指向本仓库根目录（含 `project.json` 的目录）。
3. 首次打开可按需等待资源索引与编译完成后再运行场景。

## 关于 Cursor × Cocos 的实践要点（简要）

- **脚本**：Creator 2.x 一般为 JavaScript / TypeScript 组件脚本；在 Cursor 中可针对具体 `.js` / `.ts` 与场景引用做增量修改，避免大范围无关改动。
- **资源与 meta**：若仓库中存在 `assets` 及 `.meta`，版本管理时注意与 Creator 保持同步，减少 UUID 与引用断裂。
- **生成代码**：让 AI 生成组件时，尽量说明生命周期（如 `onLoad` / `start` / `update`）、节点获取方式（`cc.find` / 属性绑定）及 2.4.x API，便于一次对齐引擎版本。

## 仓库说明

- 项目标识见根目录 `project.json`（`engine`: `cocos-creator-js`，`version`: `2.4.6`）。
- `library`、`local`、`temp` 等目录多为引擎与本地缓存生成内容；协作时通常以 `.gitignore` 约定是否纳入版本库。

## 许可

如无单独许可文件，以团队或上级仓库约定为准。
