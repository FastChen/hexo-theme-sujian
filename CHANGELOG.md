v1.2.2 (2026-05-19)

[更新]
- 使用 Hexo 多语言功能实现自定义 Fancybox 文本

---

v1.2.1 (2026-05-13)

[修复]
- 字体样式错误问题

---

v1.2.0 (2026-05-10)

[更新]
- 文章内右下角悬浮目录(toc)功能
- 文章标题下方增加显示标签功能
  - 可通过 `_config.yml` -> `post.show_tags` 控制显示

[优化]
- `languages` 的语言文件结构

---

v1.1.8 (2026-05-10)

[优化]
- 优化字体样式

---

v1.1.7 (2026-05-07)

[更新]
- 现在可通过配置开启/关闭 `fancybox.enable`

[优化]
- fancybox 现在本地托管而非cdn

---

v1.1.6 (2026-05-07)

[更新]
- 增加 [Fancybox v6](https://fancyapps.com/fancybox/) 用于文章图片查看

---

v1.1.5 (2026-04-29)

[更新]
- 可通过配置 `useNotoSansFont: true/false` 引入 `NotoSans` 字体(通过 Google Fonts CDN)
  - 如要自定义字体加载顺序可修改：`source\css\style.styl` 文件的 `:root` 内的 `--su-font-family` 变量

[优化]
- 主题选择拉框图标

---

v1.1.4 (2026-04-28)

[优化]
- 代码高亮样式优化
- 默认配置一些内容注释

---

v1.1.3 (2026-04-27)

[更新]
- 新增自适应图像标签 `<img>` 的自适应过滤器：`scripts\filter\img-filter.js`

[优化]
- 过滤器脚本整合优化
- 优化样式：`source\css\style.styl`
  - 引用语法渲染样式：`.blockquote`
  - 代码块标题渲染样式：`figure figcaption`

---

v1.1.2 (2026-04-26)

[更新]
- 更新了友链页面 layout

**友链页面使用方法：**

1. 新建页面 layout: "friends" 时可以显示友链页面
2. 可以在 config.yml 下进行添加友链内容

**格式如下：**
```yml
# 友链列表
friends:
  - name: FastChen
    link: https://fastchen.com
    avatar: https://fastchen.com/images/logo_2022_256.png
    description: "以平常之心，做非凡之事。"
```

---

v1.1.0 (2026-04-26)

[优化]
- 优化文章信息的排列布局
- 优化页脚始终固定在底部

---

v1.1.0 (2026-04-21)

- 重构绝大部分逻辑，更新分类、标签等页面

---

v1.0.3 (2026-04-21)

- 优化归档页面，封装一些组件以便复用
- 升级 Bootstrap 到 v5.3.8 版本

---

v1.0.2 (2025-09-18)

[更新]
- 主题切换支持设置不同颜色下的LOGO

---

v1.0.1 (2025-09-08)

[更新]
- 更新主题配色切换功能(light、dark、auto)

---

v1.0.0 (2025-09-03)

[发布]
- 第一个正式版!