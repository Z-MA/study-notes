---
lang: zh-CN
description: 这是一个C语言基础页面
---

# 版本管理

## 代码管理

### git

1. [Git官网文档](https://git-scm.com/book/zh/v2/)
2. [Repo 命令参考资料|Android 开源项目](https://source.android.google.cn/docs/setup/create/repo?hl=zh-cn)
3. [Gerrit Code Review for Git (googlesource.com)](https://gerrit-review.googlesource.com/Documentation/)

### sourceTree

1. [SourceTree 官网](https://www.sourcetreeapp.com/)

### SVN

1. [Subversion 版本控制 [草稿] (red-bean.com)](https://svnbook.red-bean.com/nightly/zh/index.html)

### 代码托管平台

1. [开源中国](http://www.oschina.net/)
2. [gitee](https:/www.gitee.com)
3. [GitHub](https://github.com/)

## CI

1. [Jenkins](https://www.jenkins.io/zh/)

## 开源协议

开源协议是指软件的源代码可以被任何人查看、使用、修改和分发的许可协议。常见的开源协议包括：
以下是常见开源协议的对比表格，包含主要特点和使用限制：

| 协议名称       | 是否允许商用 | 是否要求署名 | 是否允许修改 | 是否要求开源衍生作品 | 是否允许专利使用 | 是否允许闭源分发 | 典型项目示例 |
|----------------|-------------|-------------|-------------|----------------------|----------------|----------------|--------------|
| **MIT**        | ✅ 允许      | ❌ 不要求    | ✅ 允许      | ❌ 不要求             | ✅ 允许         | ✅ 允许         | React, Vue.js |
| **Apache 2.0** | ✅ 允许      | ✅ 要求      | ✅ 允许      | ❌ 不要求             | ✅ 明确授权     | ✅ 允许         | Android, Kubernetes |
| **GPL v3**     | ✅ 允许      | ✅ 要求      | ✅ 允许      | ✅ 必须开源           | ✅ 允许         | ❌ 禁止         | Linux, GIMP |
| **LGPL v3**    | ✅ 允许      | ✅ 要求      | ✅ 允许      | 仅修改部分需开源      | ✅ 允许         | ✅ 允许动态链接  | 7-Zip, GTK |
| **BSD 3-Clause** | ✅ 允许    | ✅ 要求      | ✅ 允许      | ❌ 不要求             | ❌ 无明确条款   | ✅ 允许         | FreeBSD, Go |
| **AGPL v3**    | ✅ 允许      | ✅ 要求      | ✅ 允许      | ✅ 网络服务也必须开源  | ✅ 允许         | ❌ 禁止         | MongoDB (旧版) |
| **MPL 2.0**    | ✅ 允许      | ✅ 要求      | ✅ 允许      | 仅修改文件需开源      | ✅ 允许         | ✅ 允许         | Firefox, Thunderbird |
| **Unlicense**  | ✅ 允许      | ❌ 不要求    | ✅ 允许      | ❌ 不要求             | ❌ 无明确条款   | ✅ 允许         | SQLite (近似) |

**关键区别说明**：

1. **传染性协议**（GPL/AGPL）：衍生作品必须开源
2. **弱传染性协议**（LGPL/MPL）：仅部分代码需开源
3. **宽松协议**（MIT/Apache/BSD）：允许闭源商用
4. **专利保护**：Apache 2.0 有明确专利授权条款
5. **网络服务限制**：AGPL 对 SaaS 应用有严格要求

> ℹ️ 选择建议：
> - 希望最大程度传播代码 → MIT/BSD
> - 需要专利保护 → Apache 2.0  
> - 坚持开源生态 → GPL  
> - 涉及网络服务 → AGPL

## 开源项目

1. [Android 开源项目  |  Android Open Source Project (google.cn)](https://source.android.google.cn/?hl=zh-cn)
2. [GNU 操作系统和自由软件运动](https://www.gnu.org/)
3. [Linux.org](https://www.linux.org/)

# 文档编写

## MarkDown

### Markdown 规范

1. [Markdown-CommonMark 规范（GitHub/GitLab在使用）](https://spec.commonmark.org/)
2. [GitHub Flavored Markdown 规范（GFM）](https://github.github.com/gfm/)

### Markdown 教程

1. [Markdown 指南（学习参考）](https://www.markdownguide.org/)
2. [Markdown 中文网](https://www.markdown.cn/)
3. [Markdown 教程(菜鸟教程)](https://www.runoob.com/markdown/md-tutorial.html)
4. [Markdown 教程](https://markdown.com.cn/)

### Markdown数学公式

| 名称  |  类型  |  作者/团队	 |  主要用途  |  支持范围  |
| ----  |----|----| ----|----|
| TeX	| 排版系统	| Donald Knuth	| 高质量排版	| 全面，复杂但灵活 |
| LaTeX	| 宏包系统	| Leslie Lamport	| 结构化文档排版	| 基于 TeX，易用性更好 |
| KaTeX	| JS渲染库	| Khan Academy	| 网页公式渲染	| LaTeX 数学公式子集 |
| MathJax | JS渲染库 | MathJax团队 | 网页公式渲染 | 体积较大，渲染速度比 KaTeX 慢 |

简言之：

- TeX 是基础排版引擎，极为强大但使用复杂；
- LaTeX 是对 TeX 的封装，让写论文和文档变得容易；
- KaTeX 是让 LaTeX 数学公式能在网页端“即写即显”的轻量级工具。

[KaTeX 支持的函数和语法](https://katex.org/docs/supported.html)

## 其他

### 镜像站

1. [清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/)
2. [中国科学技术大学开源软件镜像站](https://mirrors.ustc.edu.cn/)
3. [阿里云开源镜像站](https://developer.aliyun.com/mirror/)
4. [华为开源镜像站](https://mirrors.huaweicloud.com/)
5. [网易开源镜像站](https://mirrors.163.com/)
