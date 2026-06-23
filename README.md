<div align="center">

<img src="./img/logo3.webp" width="140" style="border-radius: 50%;" alt="Logo" />

# Cangdog Home

<p>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/BYGD/bygd.github.io?color=blue&style=flat-square" /></a>
  <a href="https://125877.xyz"><img src="https://img.shields.io/website?url=https%3A%2F%2F125877.xyz&style=flat-square&label=125877.xyz" /></a>
  <img src="https://img.shields.io/github/last-commit/BYGD/bygd.github.io?style=flat-square" />
  <img src="https://img.shields.io/github/repo-size/BYGD/bygd.github.io?style=flat-square" />
  <img src="https://img.shields.io/badge/uptime-99.99%25-brightgreen?style=flat-square" />
</p>

<p>
  <em>Code Create Life</em>
</p>

</div>

---

### 关于

我的个人主页，托管在 GitHub Pages，域名 125877.xyz。

### 亮点

| 功能 | 细节 |
|------|------|
| 随机壁纸 | 调用 Bing 每日精选，1080p 秒出、4K 无缝预载 |
| 一言语录 | 每次刷新随机诗词格言，来自 Hitokoto API |
| 响应式 | 桌面 / 平板 / 手机全适配 |
| 零依赖后端 | 纯静态，GitHub Pages 直接托管 |
| HTTPS / HTTP2 | Cloudflare CDN 加速，全球秒开 |
| 自定义域名 | 125877.xyz · 双栈 IPv4/IPv6 |

### 架构

```
bygd.github.io
├── index.html              # 唯二的 HTML 页面
├── 404.html                # 自定义错误页
├── assets/
│   ├── css/                # 样式表
│   │   ├── vno.css         #   主题核心
│   │   ├── iconfont.css    #   图标字体
│   │   └── onlinewebfonts.css
│   ├── js/
│   │   ├── main.js         #   背景图 · 一言 · 动效
│   │   ├── jquery.min.js
│   │   └── fetch.min.js    #   IE 兼容
│   └── fonts/              # 图标字体
├── img/                    # 站内图片 & Logo
├── touxiang/               # 头像
├── CNAME                   # 自定义域名
└── README.md
```

### 技术栈

`HTML5` `CSS3` `JavaScript` `jQuery` `Bing Image API` `Hitokoto API` `GitHub Pages` `Cloudflare`

### 许可

MIT © [Cangdog](https://github.com/BYGD)
