# PDF Mate 免费营销发布套件

---

## 1. Product Hunt 发布

### Tagline (max 60 characters)
> **Option 1:** Edit PDFs offline in your browser — no uploads, 100% free *(52 chars)*
>
> **Option 2:** Offline PDF editor for Chrome & Edge. No uploads. *(51 chars)*
>
> **Option 3:** Edit PDFs without uploading. Free browser extension. *(54 chars)*
>
> **Option 4:** Free PDF toolkit that works entirely offline. *(47 chars)*
>
> **Recommended:** Option 1 or 3

### Description (max 500 characters)

**Short version (260 chars):**
> Free Chrome & Edge extension for editing PDFs offline. Merge, split, rotate, delete, reorder, convert, compress, sign, and watermark — all processed locally in your browser. No uploads, no registration. Free tier: 50 pages/file. Pro: $2.99/mo or $19.99 lifetime.

**Full version (498 chars):**
> PDF Mate is a free Chrome & Edge extension that lets you merge, split, rotate, delete, reorder, convert, compress, sign, and watermark PDF pages — entirely in your browser. All processing happens locally; your files never leave your computer. No registration required. Free tier includes all 9 tools for up to 50 pages per file. Upgrade to Pro ($2.99/mo or $19.99 lifetime) for unlimited pages and batch processing.

---

### Maker Comment (First Comment — Pinned)

Hi Product Hunt! 👋

**What inspired me:**
A few months ago, I needed to merge some financial PDFs and remove a few pages. I searched "free PDF editor" and every single result asked me to upload my files to a server. I hesitated — these were tax documents and contracts. I didn't want them sitting on some unknown server, potentially being mined for data. I realized millions of people face this same dilemma daily: convenience vs. privacy.

**The problem:**
Most "free" PDF tools aren't actually free — they cost your data. They upload your files, process them server-side, and who knows what happens next. Some add watermarks. Others force you to create accounts. Many are just gateways to expensive subscriptions. For something as simple as merging two PDFs, the trade-off felt absurd.

**How the approach evolved:**
I started with a simple question: *Can I do this entirely in the browser?*

Turns out, yes — thanks to incredible open-source libraries like pdf-lib and PDF.js. V1 was a bare-bones merge tool. But as I showed it to friends, requests kept coming: "Can it split? Rotate? Convert to Word?" Each tool added complexity, but the core constraint never changed: **zero server uploads, ever.**

The biggest evolution was the business model. I considered ads. I considered a freemium with feature gates. Ultimately, I chose a simple, honest approach: genuinely free for daily use (50 pages/file covers 80% of use cases), with a straightforward Pro upgrade for power users. No dark patterns, no data selling, no VC pressure.

**What makes PDF Mate different:**
- 🔒 **100% client-side** — pdf-lib + PDF.js in your browser. No server, no cloud, no leaks.
- ⚡ **Zero friction** — Install, drag files, done. No signup, no email, no catch.
- 🆓 **Actually free** — Daily needs covered at zero cost. Pro ($2.99/mo or $19.99 lifetime) is for power users.

Would love your feedback! What PDF tool do you use today, and what frustrates you about it?

---

### Gallery Text (for images/GIFs)
1. Hero: "Edit PDFs Offline — Without Uploading"
2. Tool Selection: "9 PDF Tools in One Extension"
3. Merge Demo: "Drag & Drop to Merge Multiple PDFs"
4. Convert Demo: "Export PDF to Word, PPT, or Images"
5. Privacy Badge: "Your Files Never Leave Your Computer"

---

### Shoutouts — Products That Helped Make PDF Mate Awesome

Adding shoutouts creates lasting backlinks and extra visibility. Recommend 3-5 products.

**1. pdf-lib** *(Core PDF engine)*
> "The open-source library that makes 100% client-side PDF processing possible. PDF Mate wouldn't exist without pdf-lib's incredible API for merging, splitting, rotating, and modifying PDFs directly in the browser."

**2. PDF.js** *(PDF rendering)*
> "Mozilla's PDF.js powers all the PDF preview and rendering inside PDF Mate. It's the reason we can show page thumbnails and validate files without ever uploading them."

**3. React** *(UI framework)*
> "React's component model made it easy to build 6 distinct PDF tools that feel consistent and intuitive. The ecosystem (Vite, TypeScript) is a force multiplier for solo developers."

**4. Gumroad** *(Payments & licensing)*
> "Gumroad makes selling digital products embarrassingly easy. Their license key API powers PDF Mate's Pro activation — no custom billing system needed. Perfect for indie makers."

**5. Vite** *(Build tool)*
> "Vite's instant HMR and optimized builds saved countless hours during development. For browser extensions where build complexity is high, Vite is a game changer."

---

## 2. Reddit 帖子模板

### r/chrome_extensions (主推)

**Title**: [Showcase] PDF Mate — Free offline PDF editor for Chrome & Edge. No uploads, no signup.

**Body**:

Hey r/chrome_extensions,

I just launched PDF Mate, a free browser extension for editing PDFs entirely offline.

**What it does:**
- Merge, split, rotate, delete, reorder PDF pages
- Convert PDFs to Word, PowerPoint, or images (PNG/JPG)
- Everything processed locally in your browser

**Why I built it:**
I needed to merge some financial PDFs and realized every online tool wanted me to upload them to a server. No thanks. So I built something that works 100% client-side.

**Pricing:**
- Free: Up to 50 pages per file, all 9 tools
- Pro: $2.99/mo or $19.99 lifetime for unlimited everything

Would appreciate any feedback or feature requests!

🔗 [Chrome Web Store](https://chromewebstore.google.com/detail/pdf-mate/odjjmkilhlmjapalpihdeaindampnphj)
🌐 [Website](https://m9ai.work/pdf-mate-home)

---

### r/pdf (软推广)

**Title**: PSA: You can edit PDFs offline in your browser without uploading them to random websites

**Body**:

Just wanted to share a tool I've been using — PDF Mate (Chrome/Edge extension).

It lets you merge, split, rotate, delete, and reorder PDF pages entirely locally. No more uploading sensitive docs to sketchy online converters.

It's free for up to 50 pages per file, which covers most of my needs. There's a Pro version if you need unlimited pages.

Has anyone else found a good offline PDF tool? Would love to compare notes.

---

### r/productivity

**Title**: I built a free PDF toolkit that works offline — no more uploading docs to random websites

**Body**:

As someone who deals with PDFs daily, I got tired of:
- Uploading sensitive documents to who-knows-where
- Waiting for server processing
- Hitting paywalls for basic features

So I built **PDF Mate** — a Chrome & Edge extension that processes PDFs entirely in your browser.

**Tools included:**
✂️ Split by pages or ranges
🔗 Merge multiple files (drag & drop ordering)
🔄 Rotate individual or all pages
🗑️ Delete unwanted pages
📋 Reorder pages visually
⬇️ Convert to Word, PPT, or Images

**The best part:** Your files never leave your computer. Ever.

Free tier handles 50 pages per file. Pro is $2.99/mo or $19.99 lifetime.

Happy to answer any questions!

---

## 3. Hacker News (Show HN)

**Title**: Show HN: PDF Mate – Offline PDF editor browser extension, no server uploads

**Body**:

Hi HN,

I built PDF Mate, a browser extension that lets you edit PDFs entirely client-side.

**Stack:** React 18 + TypeScript, pdf-lib, PDF.js, Vite

**Features:**
- Merge, split, rotate, delete, reorder PDF pages
- Convert to DOCX, PPTX, PNG, JPG
- Dark mode, bilingual UI (EN/ZH)
- All processing happens in-browser via Web APIs

**Why:** I didn't want to upload tax documents and contracts to random "free PDF tools" that clearly monetize data somehow.

**Business model:** Free tier (50 pages/file) + Pro license via Gumroad ($2.99/mo or $19.99 lifetime). No VC, no tracking, no nonsense.

Would love technical feedback or questions about the client-side PDF processing approach.

🔗 [Chrome Web Store](https://chromewebstore.google.com/detail/pdf-mate/odjjmkilhlmjapalpihdeaindampnphj)
🌐 [Landing Page](https://m9ai.work/pdf-mate-home)

---

## 4. Twitter/X 发布线程

**Tweet 1/5** 🧵
I built a free PDF editor that works entirely in your browser.

No uploads. No signup. No "free trial that requires a credit card."

Here's why PDF Mate is different 👇

**Tweet 2/5**
Every other PDF tool:
❌ "Upload your file to our server"
❌ "Create an account first"
❌ "Free* (*watermarked, limited, slow)"

PDF Mate:
✅ Processes files locally in your browser
✅ Open and use immediately
✅ Actually free for daily use (50 pages)

**Tweet 3/5**
6 tools in one extension:
🔗 Merge multiple PDFs
✂️ Split by pages or ranges
🔄 Rotate pages
🗑️ Delete pages
📋 Reorder pages
⬇️ Convert to Word/PPT/Images

**Tweet 4/5**
The tech stack:
- React + TypeScript
- pdf-lib for PDF manipulation
- PDF.js for rendering
- Everything client-side via Web APIs

Your files NEVER leave your computer. Period.

**Tweet 5/5**
PDF Mate is free on Chrome Web Store.

Need unlimited pages? Pro is $2.99/mo or $19.99 lifetime. No subscriptions tricking you.

Get it here: [link]

RTs appreciated 🙏

---

## 5. Medium / Dev.to 文章大纲

### 标题选项
1. "I Built a Free PDF Editor That Never Uploads Your Files"
2. "Why Every PDF Tool Wants Your Data (and How to Avoid It)"
3. "Building an Offline-First PDF Toolkit with React and pdf-lib"

### 文章结构

**引言** — 问题：在线 PDF 工具的隐私风险
**个人故事** — 为什么开始这个项目
**技术架构** — 如何在浏览器中处理 PDF
- pdf-lib 用于 PDF 操作
- PDF.js 用于渲染
- Blob API 用于文件下载
**功能展示** — 6 个工具的简要说明
**商业模式** — 为什么免费 + Pro，而非广告或数据变现
**开源/隐私承诺** — 数据本地化处理的实现
**结语** — 邀请试用和反馈

**CTA**: 在文末添加 Chrome Web Store 链接和 Gumroad 链接

---

## 6. 邮件/Newsletter 投稿模板

**Subject**: New tool for your readers: Edit PDFs without uploading them

**Body**:

Hi [Name],

I recently launched PDF Mate, a free Chrome & Edge extension for editing PDFs entirely offline.

Given your newsletter's focus on [privacy/productivity/tools], I thought it might interest your readers.

**Key highlights:**
- 9 PDF tools: merge, split, rotate, delete, reorder, convert
- 100% client-side processing — files never uploaded
- Free tier available, Pro at $2.99/mo or $19.99 lifetime
- Built with React + TypeScript + pdf-lib

Happy to provide more details, exclusive codes for your readers, or answer any questions.

Best,
[Your Name]

---

## 7. 执行清单

### 发布前准备
- [ ] 制作 Product Hunt GIF 演示（推荐 Screen Studio 或 Loom）
- [ ] 准备所有平台文案（复制上方内容）
- [ ] 确认 Chrome Web Store 链接有效
- [ ] 在 personal Twitter/LinkedIn 预热（"Building something new..."）

### 发布日（建议周二或周三）
- [ ] 00:00 PST — Product Hunt 上线
- [ ] 上午 — Reddit 帖子（r/chrome_extensions, r/productivity）
- [ ] 中午 — Hacker News Show HN
- [ ] 下午 — Twitter 线程
- [ ] 全天 — 回复所有评论和问题

### 发布后 1 周
- [ ] 发布 Medium/Dev.to 文章
- [ ] 在 Reddit 回答相关 PDF 问题（软性提及）
- [ ] 联系 3-5 个 Newsletter 作者
- [ ] 制作首个 TikTok/YouTube Short 教程

---

## 8. 快速回复模板

### 用户说 "有中文界面吗？"
> 是的！PDF Mate 支持中英文双语界面，可以在设置中切换。

### 用户说 "免费版够用吗？"
> 免费版包含全部 6 个工具，支持最多 50 页/文件。对于日常轻度使用（合并几页、删除一两页）完全够用。如果需要处理大文件或批量操作，Pro 版 ($2.99/月 或 $19.99 终身) 可以解锁无限页数和批量处理。

### 用户说 "和 XX 工具比怎么样？"
> PDF Mate 的核心差异是 **100% 本地处理**。其他工具大多需要上传到服务器，存在隐私风险。我们不上传、不存储、不分析你的 PDF 内容。

### 用户报告 Bug
> 感谢反馈！为了帮我快速定位问题，请提供：
> 1. 浏览器版本（Chrome/Edge？）
> 2. PDF 大致页数和文件大小
> 3. 具体操作步骤
> 4. 错误现象描述

---

*Generated for PDF Mate Marketing Launch*
