# tool-lab-storybook-minimal

用 **Storybook** 给最小 React 组件 `<Button />` 搭一个「组件展台」：`npm run storybook` 在独立界面里预览不同参数组合。

## Storybook 是什么

- **Storybook**：运行在单独端口（默认 6006）的 UI 工作台，用来开发和文档化组件。
- **它和正常网站的区别**：业务站点关心路由与业务流程；Storybook 关心「单个组件在各种状态下长什么样」。

## 为什么程序员常用它

- **组件评审**：设计师/前端可以只看组件状态，不被整站样式干扰。
- **回归对照**：改样式前后对照 Story，更容易发现无意破坏。
- **文档化**：可与 Controls、Docs 插件结合生成交互文档（本仓库只用到最小配置）。

## 官方文档（版本差异请以文档为准）

https://storybook.js.org/docs

参数、配置文件命名若与你本地 Storybook 版本不一致，请以 **`storybook --help`** 与官网为准。

## 安装步骤

```bash
cd tool-lab-storybook-minimal
npm install
```

> 说明：为避免 Storybook 8 与 Vite 6 的兼容不确定性，本仓库将 **Vite 固定在 5.x**。这与 Stage 1 的 Vite 6 演示略有差异，但更利于 Storybook 稳定构建。

## 运行步骤（Storybook）

```bash
npm run storybook
```

浏览器访问终端提示地址（一般为 `http://localhost:6006`），左侧找到「示例 / Button」。

## （可选）正常运行宿主 Vite 页面

```bash
npm run dev
```

这是附带的最小站点入口；**学习 Storybook 时应以前一条命令为主**。

## 静态构建 Storybook（可选）

```bash
npm run build-storybook
```

产物输出到 `storybook-static/`（已在 `.gitignore` 忽略）。

## 成功后应该看到什么

- Storybook 左侧出现 **示例/Button**。
- **Default**：蓝色可点按钮。
- **Disabled**：灰色不可用按钮。

## 常见失败原因

| 现象 | 可能原因 |
| --- | --- |
| `npm install` 很慢或超时 | 网络问题；不要短时间内疯狂重试 |
| Storybook 启动报错 | Node 版本过旧；或依赖版本冲突——把完整报错贴到 `RUN_RESULT.md` |
| 端口 6006 占用 | 改用 `npm run storybook -- --port 6007`（以 Storybook CLI 文档为准） |

## 下一步可以怎么扩展

- 增加更多 Story（小号按钮、加载中等）。
- 接入 Vitest + Storybook test runner（进阶）。

## 安全注意事项

- Storybook 默认暴露在本机端口；**不要在不可信网络环境下把端口映射到公网**。
- 不在 Story 里粘贴真实 token、cookie。

笔记：[`docs/NOTES.md`](./docs/NOTES.md)。
