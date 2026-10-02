# 网站框架与信息架构（首版提案）

> 状态：根据 2026-10-03 的需求沟通整理，产品方向已确认；Astro 初始化和内容迁移待运行环境与 GitHub 仓库信息就绪后开始。

## 目标

- 面向江南大学计算机相关专业学生，提供保研经验、准备资料和流程参考。
- 经验贴统一按**申请年份**组织，不再把“夏令营”和“预推免”作为两个一级栏目。
- 内容以 Markdown 为唯一维护入口；管理员审核后手动发布。
- 投稿邮箱使用 `eeecank@163.com`，同时作为投稿、更正、撤下和内容反馈邮箱。
- 首版采用简单、克制的配色和原生 CSS，不引入完整 UI 主题或前端运行时。

## 技术框架

- Astro + TypeScript
- Astro Content Collections 管理经验贴和资源页面
- 原生 CSS，集中维护颜色、间距、排版和断点
- 静态输出，后续部署到用户自己的 GitHub 仓库和 GitHub Pages
- GitHub Actions 负责检查、构建和部署

不引入数据库、登录、后台、在线编辑器或自动收件服务。具体 GitHub 仓库地址确定后，再集中填写 `site` 和 `base` 配置。

## 页面与导航

首版主导航建议为：

1. **首页 `/`**：项目定位、按年份浏览入口、最近更新经验、资料/流程入口、投稿入口。
2. **经验贴 `/experiences/`**：全部文章，按申请年份倒序展示；年份选项由实际文章自动生成。
3. **保研流程 `/guide/`**：将旧站时间线和准备说明整理成连续流程，不作为文章分类。
4. **资料与工具 `/resources/`**：承接旧仓库的 408、简历、机试、英语、数学和工具链接。
5. **投稿 `/submit/`**：Markdown 模板、Word 模板、投稿说明和审核流程；邮箱为空时显示占位提示。
6. **关于 `/about/`**：项目背景、维护说明、贡献致谢、更正渠道和内容时效说明。

文章详情使用稳定地址，例如 `/experiences/2025/leo/`。也可以保留一个不带年份的稳定 ID 路由，但不根据标题自动改变地址。

## 经验贴内容模型

一篇文章一个目录，新增文章只需要添加 Markdown 和图片：

```text
src/content/experiences/
  2025-leo/
    index.md
    cover.jpg          # 可选封面
    interview.png      # 可选正文图片
```

正式发布文件使用宽松但明确的元数据：

```yaml
---
title: "示例：2025 年保研经验"
author: "匿名"
applicationYear: 2025
summary: "可选摘要"
# cover: "./cover.jpg"
# coverAlt: "封面说明"
publishedAt: 2026-01-01
# updatedAt: 2026-01-02
# finalDestination: "可选，最终去向"
# sourceUrl: "可选，外部原文链接"
draft: false
---
```

`applicationYear` 表示参加保研申请的年份，`publishedAt` 表示文章公开时间，两者不混用。学校、阶段和标签不进入新版 YAML，继续保留在文章正文中。缺少历史元数据时降级展示，不猜测补写。

历史文章中的阶段信息保留在正文中，不生成“夏令营页”和“预推免页”。

## 推荐组件边界

```text
layouts/
  SiteLayout.astro
  PageLayout.astro
  ArticleLayout.astro
components/
  SiteHeader.astro
  SiteFooter.astro
  ExperienceCard.astro
  ExperienceGrid.astro
  YearNav.astro
  MetaChips.astro
  CoverImage.astro
  TableOfContents.astro
  Breadcrumbs.astro
  EmptyState.astro
styles/
  tokens.css
  global.css
  prose.css
```

公共布局负责导航、页脚和文章排版。文章页面不重复手写页面结构；新增文章只触发内容集合重新生成首页、列表和年份页。

## 目录草案

```text
src/
  content/
    experiences/
    resources/
    pages/
  components/
  layouts/
  pages/
    index.astro
    experiences/index.astro
    experiences/[year]/index.astro
    experiences/[year]/[slug].astro
    guide/index.astro
    resources/index.astro
    resources/[slug].astro
    submit/index.astro
    about/index.astro
    404.astro
  config/site.ts
  styles/
public/
  templates/
    submission-template.md
    submission-template.docx
docs/
  ARCHITECTURE.md
  MIGRATION.md
  MAINTENANCE.md
  ROADMAP.md
```

## 投稿模板方向

以原仓库模板为基础，保留“个人背景—申请经历—各院校情况—最终去向—复盘建议”的成熟结构，但去掉“必须填写夏令营/预推免类型”的限制。作者可以：

- 使用昵称或匿名；
- 省略精确排名、联系方式等敏感信息；
- 在一篇文章中写多所学校和不同阶段经历；
- 直接提供外部文章链接；
- 只填写普通 Markdown 内容，由管理员补齐正式 YAML 元数据。

同时提供结构对应的 `.docx` 文件。Word 模板使用真正的标题层级和普通段落，图片作为可选正文内容，不开发在线转换服务。

## 视觉方向

建议使用白色或暖灰背景、深灰正文、单一深蓝强调色和系统中文字体。卡片、按钮、链接和标签共用一组颜色变量，避免渐变、复杂动画和多套主题。首版优先保证中文长文的行宽、行高、表格、图片和手机布局。

## 参考仓库迁移关系

```text
原始仓库 SummerCamp / YuTuiMian  →  experiences
原始仓库 Materials              →  resources
旧站 guide                       →  guide
旧站 ref                         →  resources
Contribution                     →  submit
about                            →  about
```

盘点显示原始仓库有 2025 年夏令营 9 篇、预推免 18 篇；其中 `Test-User`、`TestUser` 是测试稿，不能发布。旧站的 `public/` 是 Hugo 构建产物，不作为文章来源。迁移时需要人工映射、去重和处理图片路径，不能仅按标题自动转换。

旧站的服务模块、旧维护者邮箱、QQ 和联系方式暂不公开；相关来源保留在迁移记录中，待维护者明确公开范围。

## 尚待提供的信息

GitHub 仓库的最终 owner/name 由维护者后续提供，用于确定部署 `site`、`base` 和工作流；在此之前不写死仓库地址。

