---
lang: zh-CN
title: 设计工具
description: 这是一个视觉设计基础页面
---

# 工具类软件
[GGTalk](https://www.cnblogs.com/justnow)
[uTools](https://www.u-tools.cn/)  
[冰点还原](https://www.bingdiancn.com/)  

[泡泡Dog官网(需翻墙)](https://www.paopao.dog/)  
[泡泡Dog官网入口](https://ppg.369.cyou)  
邀请码：4ma9meq8（注册的时候填写）

[hexo官网](https://hexo.io/zh-cn/)   
[wordpress官网](https://wordpress.org/)  


## Github推送代码时设置代理
使用github推送代码时总是显示连接不上服务器，这时我们就需要设定git代理解决。首先在首页查到Clash的混合代理地址：127.0.0.1:32210 (打开clash在“首页”页面能看到)。

打开Git CMD

添加全局代理:
```bash
git config --global http.proxy http://127.0.0.1:32210
git config --global https.proxy http://127.0.0.1:32210
```

验证代理设置:
```bash
git config --global --get http.proxy
git config --global --get https.proxy
```

取消代理:
```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 查看windows文件使用进程

**应用背景**  
windows操作系统中，有时我们关闭程序后，一些相关的进程仍在后台运行，并访问着一些文件，使得我们无法对这些文件及其所属的文件夹进行删除、重命名等操作。  
此时，如果知道这个文件/文件夹正在被哪个进程使用，就可以用任务管理器结束这个进程，然后就可以对文件进行修改了。(请谨慎决定是否结束关键的、可能会影响系统正常工作的进程。)  

**查看方法**  
1. 打开 资源管理器（Ctrl+Shift+Esc）
2. 选择 性能 选项卡
3. 点击右下角的 资源监视器
4. 选择 概述 选项卡
5. 选择 “磁盘”
6. 在“磁盘”下方弹出的列表中，第三列“文件”就是当前被进程打开的文件。可能需要最大化窗口并手动调整列宽才能看清。
7. 表中的第一列 映像 即是打开这个文件的进程名称，可考虑在任务管理器中结束该进程
8. 如果有重名的多个进程，以第二列 PID 为准

# 在线小工具
## **在线素材工具：**

如果你写文章，或者做视频，那就一定少不了要找素材，包括各种图片、背景、emoji表情、表情包、壁纸、视频、gif图等等。  
• 免费透明背景图片素材：[http://pngimg.com/](https://link.zhihu.com/?target=http%3A//pngimg.com/)  
• Emoji表情搜索：[https://emoji.svend.cc/](https://link.zhihu.com/?target=https%3A//emoji.svend.cc/)  
• Emoji表情包下载：[https://emojiisland.com/](https://link.zhihu.com/?target=https%3A//emojiisland.com/)  
• open source icons：[https://feathericons.com/](https://link.zhihu.com/?target=https%3A//feathericons.com/)  
• 表情包在线网站：[https://fabiaoqing.com/](https://link.zhihu.com/?target=https%3A//fabiaoqing.com/)  
• 免费PNG图片库：[https://pluspng.com/](https://link.zhihu.com/?target=https%3A//pluspng.com/)  
• ICON图标在线下载：[https://www.iconfinder.com/](https://link.zhihu.com/?target=https%3A//www.iconfinder.com/)  
• 极简壁纸：[https://bz.zzzmh.cn/](https://link.zhihu.com/?target=https%3A//bz.zzzmh.cn/)  
• Wallpaper Abyss壁纸：[https://wall.alphacoders.com](https://link.zhihu.com/?target=https%3A//wall.alphacoders.com)  
• Pixabay图片素材库：[https://pixabay.com/zh/](https://link.zhihu.com/?target=https%3A//pixabay.com/zh/)  
• Unsplash图片素材库：[https://unsplash.com](https://link.zhihu.com/?target=https%3A//unsplash.com)  
• Pexels图片素材库：[http://www.pexels.com](https://link.zhihu.com/?target=http%3A//www.pexels.com)  
• NASA图片视频素材库：[https://images.nasa.gov](https://link.zhihu.com/?target=https%3A//images.nasa.gov)

## **设计制作类工具：**

对于那些文章创作者和视频创作者而言，设计封面，做海报，设计LOGO，图片美化等等基本也是刚需。  
这样大概率日常会用到一些简易好上手的在线设计制作类工具，比如在线P图、音/视频轻量化剪辑、logo制作、海报设计制作、图片美化、[在线图片](https://www.zhihu.com/search?q=%E5%9C%A8%E7%BA%BF%E5%9B%BE%E7%89%87&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2686423348%7D)转换或生成等等。  
• 在线PS：[https://www.uupoop.com/](https://link.zhihu.com/?target=https%3A//www.uupoop.com/)  
• 在线音频剪辑：[https://www.weixinsyt.com/](https://link.zhihu.com/?target=https%3A//www.weixinsyt.com/)  
• 在线视频剪辑：[https://www.kapwing.com/](https://link.zhihu.com/?target=https%3A//www.kapwing.com/)  
• 免费logo在线制作：[http://www.uugai.com/](https://link.zhihu.com/?target=http%3A//www.uugai.com/)  
• 艺术字体在线生成：[https://www.qt86.com/](https://link.zhihu.com/?target=https%3A//www.qt86.com/)  
• [在线表格](https://www.zhihu.com/search?q=%E5%9C%A8%E7%BA%BF%E8%A1%A8%E6%A0%BC&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2686423348%7D)转换工具: [https://tableconvert.com/](https://link.zhihu.com/?target=https%3A//tableconvert.com/)  
• 在线海报设计工具: [https://www.designcap.com/](https://link.zhihu.com/?target=https%3A//www.designcap.com/)  
• 图片智能放大工具：[https://bigjpg.com/](https://link.zhihu.com/?target=https%3A//bigjpg.com/)  
• 二维码美化器：[https://mh.cli.im/](https://link.zhihu.com/?target=https%3A//mh.cli.im/)  
• 在线代码[截图工具](https://www.zhihu.com/search?q=%E6%88%AA%E5%9B%BE%E5%B7%A5%E5%85%B7&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2686423348%7D)：[https://carbon.now.sh/](https://link.zhihu.com/?target=https%3A//carbon.now.sh/)  
• 在线抠图工具：[https://www.remove.bg/zh](https://link.zhihu.com/?target=https%3A//www.remove.bg/zh)  
• ICO图标在线生成：[http://www.fly63.com/php/ico/](https://link.zhihu.com/?target=http%3A//www.fly63.com/php/ico/)  
• SVG转PNG工具：[http://www.fly63.com/tool/svg2img/](https://link.zhihu.com/?target=http%3A//www.fly63.com/tool/svg2img/)  
• 视频转GIF工具：[http://www.fly63.com/tool/giftxt/](https://link.zhihu.com/?target=http%3A//www.fly63.com/tool/giftxt/)  
• 二维码在线生成器：[http://www.fly63.com/tool/ewm/](https://link.zhihu.com/?target=http%3A//www.fly63.com/tool/ewm/)  
• 二维码在线解码：[http://www.fly63.com/php/decoder/](https://link.zhihu.com/?target=http%3A//www.fly63.com/php/decoder/)

## **写辅助工具：**

写文章的过程中经常会用到和写作相关的辅助工具，比方说：字数统计工具、Markdown格式的文章[排版工具](https://www.zhihu.com/search?q=%E6%8E%92%E7%89%88%E5%B7%A5%E5%85%B7&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2686423348%7D)、图床网站、代码截图工具等等，所以下面这些在线工具就能很好地满足我的需求。  
• 在线字数统计：[https://www.eteste.com/](https://link.zhihu.com/?target=https%3A//www.eteste.com/)  
• mdnice markdown排版工具：[https://mdnice.com/](https://link.zhihu.com/?target=https%3A//mdnice.com/)  
• md2all markdown排版工具：[http://md.aclickall.com/](https://link.zhihu.com/?target=http%3A//md.aclickall.com/)  
• 在线[图床](https://www.zhihu.com/search?q=%E5%9B%BE%E5%BA%8A&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2167298770%7D)神器：[https://picx.xpoet.cn/](https://link.zhihu.com/?target=https%3A//picx.xpoet.cn/)  
• [在线免费](https://www.zhihu.com/search?q=%E5%9C%A8%E7%BA%BF%E5%85%8D%E8%B4%B9&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2686423348%7D)图床：[https://sm.ms/](https://link.zhihu.com/?target=https%3A//sm.ms/)  
• 图壳图床：[https://imgkr.com/](https://link.zhihu.com/?target=https%3A//imgkr.com/)  
• 在线代码截图工具：[https://carbon.now.sh/](https://link.zhihu.com/?target=https%3A//carbon.now.sh/)  
• 在线短链接工具：[https://urlify.cn/](https://link.zhihu.com/?target=https%3A//urlify.cn/)  
• 在线文本替换：[http://www.fly63.com/tool/textreplace/](https://link.zhihu.com/?target=http%3A//www.fly63.com/tool/textreplace/)

## **在线办公工具：**

部分在线工具主要用来处理一些和文档以及文稿相关的事情，经常用到的比如：在线的全套pdf处理和转换工具、各种各样多媒体文件间的相互转换工具、在线识别工具、在线压缩工具等等。  
• pdf在线处理工具1：[https://smallpdf.com/cn/pdf-tools](https://link.zhihu.com/?target=https%3A//smallpdf.com/cn/pdf-tools)  
• pdf在线处理工具2：[https://tools.pdf24.org/zh/](https://link.zhihu.com/?target=https%3A//tools.pdf24.org/zh/)  
• pdf转word在线工具：[https://www.pdftoword.com/](https://link.zhihu.com/?target=https%3A//www.pdftoword.com/)  
• 在线多媒体转换器合集：[https://cn.office-converter.com/](https://link.zhihu.com/?target=https%3A//cn.office-converter.com/)  
• 在线文字识别工具：[https://ocr.wdku.net/](https://link.zhihu.com/?target=https%3A//ocr.wdku.net/)  
• 在线文件压缩工具：[https://docsmall.com/](https://link.zhihu.com/?target=https%3A//docsmall.com/)