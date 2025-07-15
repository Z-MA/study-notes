# 目录
- [目录](#目录)
- [代码管理](#代码管理)
	- [git](#git)
	- [sourceTree](#sourcetree)
	- [SVN](#svn)
	- [代码托管平台](#代码托管平台)
	- [开源协议](#开源协议)
	- [开源项目](#开源项目)
- [文档编写](#文档编写)
	- [MarkDown](#markdown)
		- [Markdown 规范](#markdown-规范)
		- [Markdown 教程](#markdown-教程)
- [其他](#其他)
	- [镜像站](#镜像站)

# 代码管理
## git
1. [Git官网文档](https://git-scm.com/book/zh/v2/)
2. [Repo 命令参考资料|Android 开源项目](https://source.android.google.cn/docs/setup/create/repo?hl=zh-cn)
3. [Gerrit Code Review for Git (googlesource.com)](https://gerrit-review.googlesource.com/Documentation/)


### 1.1 关于版本控制

版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本的系统。

#### 版本控制的种类：
1. **本地版本控制系统**
   - 将文件的不同版本存储在本地数据库中。
   - 缺点：容易覆盖或丢失历史记录。

2. **集中化版本控制系统（CVCS）**
   - 有一个集中式的服务器，用于存储所有版本历史，用户通过客户端连接到服务器获取最新文件或提交更新。
   - 缺点：如果服务器出现故障，所有数据可能会丢失。

3. **分布式版本控制系统（DVCS）**
   - 用户不仅克隆项目的最新版本，还会复制整个版本历史。
   - 优势：
     - 即使服务器崩溃，任意客户端都可以还原整个仓库。
     - 支持多个远程仓库，便于协作。

Git 是一种现代的分布式版本控制系统。

---

### 1.2 Git 简史

Git 的诞生背景源于 Linux 内核项目的需求：

- Linux 内核项目最初使用商业版本控制工具 **BitKeeper**。
- 2005 年，BitKeeper 的免费许可证被收回。
- Linus Torvalds 开发了一个全新的分布式版本控制系统，目标是：
  - 快速。
  - 简单设计。
  - 强大的非线性分支与合并功能。
  - 数据的完整性保障。

Git 的名字来源于 Linus 的幽默，他称自己是一个“讨厌鬼”（git 在英语中是“怪人”的意思）。

---

### 1.3 Git 是什么？

Git 是一种开放源码的分布式版本控制系统，专注于速度、数据完整性和支持分布式非线性工作流。

#### Git 的特点：
1. **快速**：Git 的许多操作都是本地完成的，速度极快。
2. **简单设计**：Git 使用了 SHA-1 哈希值来标识文件和提交，确保数据完整性。
3. **分布式**：每个用户的工作副本都是完整的仓库副本。
4. **强大的分支管理**：Git 支持轻量、高效的分支和合并操作。

#### 与其他版本控制系统的对比：
- **与集中式版本控制的不同**：
  - 集中式版本控制依赖中心服务器，而 Git 的分布式架构确保每个用户都拥有完整的历史记录。
- **与其他分布式版本控制的不同**：
  - Git 更注重性能和效率，尤其在分支管理和合并操作上更简单、快速。

---

### 1.4 命令行

Git 的操作主要通过命令行完成。

#### 为什么使用命令行？
- Git 的许多功能只能通过命令行操作。
- 命令行比 GUI 客户端更高效。

#### 如何打开命令行？
- **Linux/Mac**：打开终端。
- **Windows**：使用 Git Bash 或 PowerShell。

---

### 1.5 安装 Git

#### 在 Linux 上安装：
1. 使用包管理器安装：
   ```bash
   sudo apt-get install git       # Ubuntu 或 Debian
   sudo yum install git           # Fedora 或 CentOS
   ```

2. 验证安装：
   ```bash
   git --version
   ```

#### 在 macOS 上安装：
1. 使用 Homebrew 安装：
   ```bash
   brew install git
   ```

2. 验证安装：
   ```bash
   git --version
   ```

#### 在 Windows 上安装：
1. 下载 Git 安装包：[Git for Windows](https://git-scm.com/download/win)。
2. 运行安装程序并配置选项。
3. 使用 Git Bash 验证安装：
   ```bash
   git --version
   ```

---

### 1.6 初次运行 Git 前的配置

在使用 Git 前，需要进行一些全局配置。

#### 配置用户名和邮箱：
```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

#### 配置编辑器：
默认情况下，Git 使用系统的默认文本编辑器。可以手动指定：
```bash
git config --global core.editor "vim"
```

#### Git 配置文件层级：
1. **系统级**：对所有用户有效（`/etc/gitconfig`）。
2. **用户级**：对当前用户有效（`~/.gitconfig`）。
3. **项目级**：仅对当前项目有效（`.git/config`）。

#### 查看配置信息：
```bash
git config --list
```

---

### 1.7 获取帮助

#### 获取命令帮助的方式：
1. 使用 `git help`：
   ```bash
   git help <command>
   ```
2. 使用 `--help` 参数：
   ```bash
   git <command> --help
   ```
3. 查看手册：
   ```bash
   man git-<command>
   ```

#### 示例：
```bash
git help config
```

---

### 1.8 总结

Git 的安装、初步配置和基本概念是学习 Git 的第一步。确保掌握这些基础知识，为后续的深入学习打下坚实的基础。

---

### 2.1 获取 Git 仓库

#### 初始化一个新仓库：
```bash
git init
```
- 创建一个 `.git` 目录，用于存储 Git 仓库的元数据。

#### 克隆现有仓库：
```bash
git clone <url>
```
- 示例：
  ```bash
  git clone https://github.com/user/repo.git
  ```

---

### 2.2 记录每次更新到仓库

#### 添加文件到暂存区：
```bash
git add <file>
```
- 添加所有文件：
  ```bash
  git add .
  ```

#### 提交更改：
```bash
git commit -m "描述信息"
```
- 提交同时跳过暂存区：
  ```bash
  git commit -a -m "描述信息"
  ```

---

### 2.3 查看提交历史

#### 查看完整历史：
```bash
git log
```

#### 查看简要历史：
```bash
git log --oneline
```

---

### 2.4 撤消操作

#### 修改最后一次提交：
```bash
git commit --amend
```

#### 撤销暂存区中的文件：
```bash
git reset HEAD <file>
```

---

### 2.5 远程仓库的使用

#### 添加远程仓库：
```bash
git remote add origin <url>
```

#### 推送代码到远程仓库：
```bash
git push origin <branch>
```

#### 拉取代码：
```bash
git pull
```

---

### 2.6 打标签

#### 创建轻量标签：
```bash
git tag <tagname>
```

#### 创建带注释标签：
```bash
git tag -a <tagname> -m "描述信息"
```

---

### 2.7 Git 别名

#### 配置别名：
```bash
git config --global alias.st status
```
- 使用别名：
  ```bash
  git st
  ```

---

### 2.8 总结

Git 的基本操作包括初始化仓库、提交更改、查看历史、管理远程仓库等，是日常使用 Git 的核心内容。

---

### 3.1 分支简介

分支是 Git 的核心功能之一，用于同时开发多个功能。

---

### 3.2 分支的新建与合并

#### 创建分支：
```bash
git branch <branchname>
```

#### 切换分支：
```bash
git checkout <branchname>
```

#### 合并分支：
```bash
git merge <branchname>
```

---

### 3.3 分支管理

#### 查看分支：
```bash
git branch
```

#### 删除分支：
```bash
git branch -d <branchname>
```

---

### 3.4 分支开发工作流

常见的分支开发流包括 Git Flow 和 GitHub Flow 等。

---

### 3.5 远程分支

#### 跟踪远程分支：
```bash
git checkout -b <branchname> origin/<branchname>
```

---

### 3.6 变基

#### 变基分支：
```bash
git rebase <branch>
```

---

### 3.7 总结

Git 的分支功能强大，支持非线性开发，是团队协作中的重要工具。

---

## sourceTree
1. [SourceTree 官网](https://www.sourcetreeapp.com/)

## SVN
1. [Subversion 版本控制 [草稿] (red-bean.com)](https://svnbook.red-bean.com/nightly/zh/index.html)

## 代码托管平台
1. [开源中国](http://www.oschina.net/)
2. [gitee](https:/www.gitee.com)
3. [GitHub](https://github.com/)

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

# 其他
## 镜像站
1. [清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/)
2. [中国科学技术大学开源软件镜像站](https://mirrors.ustc.edu.cn/)
3. [阿里云开源镜像站](https://developer.aliyun.com/mirror/)
4. [华为开源镜像站](https://mirrors.huaweicloud.com/)
5. [网易开源镜像站](https://mirrors.163.com/)
