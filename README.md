# JNU CS BAOYAN

江南大学计算机相关专业保研经验分享站。经验贴按申请年份整理，正文来自投稿者的个人经历，网站使用 Astro 生成静态页面并部署到 GitHub Pages。

## 本地开发

项目需要 Node.js 22.12 或更高版本。

```bash
npm install
npm run dev
```

常用检查命令：

```bash
npm run check
npm run build
npm run preview
```

- `check`：运行 Astro 类型和内容集合检查。
- `build`：生成静态站点。
- `preview`：预览构建产物。

## 内容结构

经验文章放在 `src/content/experiences/<stable-id>/index.md`，同一目录可放封面、正文图片和经过审核的附件。新文章至少需要：

```yaml
---
title: "文章标题"
author: "匿名"
applicationYear: 2026
draft: false
---
```

正文不要求投稿者填写 YAML；维护者在发布前补充元数据。文章不会按学校、夏令营或预推免拆分栏目，这些信息保留在正文中。

首页说明、流程、资料和关于页面位于 `src/content/pages/`。“最前面的话”以首页横向卡片展示，点击后进入独立文章页；经验列表和年份列表均提供页码导航。投稿模板位于：

- `public/templates/submission-template.md`
- `public/templates/submission-template.docx`

## 部署

当前项目按 GitHub Pages 项目站点配置：

```text
https://jnu-cs-baoyan.github.io/CS2026/
```

站点地址和仓库子路径集中在 `astro.config.mjs`。GitHub Actions 工作流会在 `main` 推送后执行检查、构建和部署。

## 维护

项目内部的迁移记录、审查结果和待办清单保存在本地 `docs/` 目录，不随 GitHub 仓库发布。投稿模板仍公开在：

- `public/templates/submission-template.md`
- `public/templates/submission-template.docx`

`references/` 位于项目目录外，仅用于前期盘点和迁移核对，不会提交到这个 GitHub 仓库。

