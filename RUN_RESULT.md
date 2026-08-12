# 运行记录

## 本机环境

- 运行日期：2026-08-12
- Node 版本：v26.0.0
- npm 版本：11.12.1
- Python 版本：不适用
- 是否需要账号：否
- 是否需要 API Key：否

## 运行命令

```bash
npm run build
npm run build-storybook
python3 -m http.server 6006 --bind 127.0.0.1 --directory storybook-static
```

本次复用仓库既有且被忽略的 `node_modules/`，没有安装或升级依赖。

## 运行结果

- Vite 应用构建成功（35 个模块），Storybook 静态构建成功（106 个模块）；
- `index.json` 包含 Default、Disabled 和自动文档三个条目；
- 浏览器确认 Default story 显示可用按钮“Storybook 最小按钮”，Disabled story 显示真正带 `disabled` 属性的“不可用状态”按钮；
- 两个 story 的页面控制台均没有 warning 或 error，`dist/` 与 `storybook-static/` 保持忽略状态。

## 报错记录

构建无失败。Storybook 记录了未使用 MDX pattern、其运行时代码使用 `eval`、大 chunk，以及 Node 26 下子进程 shell 参数的警告；这些来自当前工具链，不影响本次两个故事的静态构建与浏览器验证，未据此擅自升级依赖。

## 一句话总结

Storybook 把组件的不同参数组合登记为独立 story，使默认态和禁用态可以脱离整页应用单独构建、浏览和检查。
