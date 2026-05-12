# 学习笔记（NOTES）

## `*.stories.jsx` 是什么

Storybook 约定：匹配 `.storybook/main.js` 里 `stories` glob 的文件会被收录。
每个文件导出 `meta`（元信息）与一个或多个 `Story`（展示场景）。

## 为什么 Storybook 也要装 React

Storybook 渲染的就是 React 组件；因此依赖里仍需 `react` / `react-dom`。

## 不确定 CLI 参数时

终端运行：

```bash
npx storybook@latest --help
```

以你安装的 Storybook 版本输出为准。
