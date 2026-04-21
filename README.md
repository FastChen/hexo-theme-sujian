<div align="right">
  语言:
  中文
  <a title="English" href="README-en_US.md">English</a>
</div>

<div align="center">
  <img src="/source/images/logo.png" alt="hexo-theme-sujian" height="160" width="160"/>
  <h1>素笺</h1>
  <h3>一款简单的 Hexo 博客主题</h3>
  <img src="https://img.shields.io/github/stars/fastchen/hexo-theme-sujian?label=Star&logo=github"/>
  <a href="https://github.com/FastChen/hexo-theme-sujian/issues"><img src="https://img.shields.io/github/issues/fastchen/hexo-theme-sujian?label=Issues"/></a>
</div>

## 预览

<div align="center">
    <h3>❤️ <a title="FASTCHEN" href="https://fastchen.com">FASTCHEN</a> BLOG</h3>
</div>

## 使用

### 安装主题

**使用 Git 克隆安装**

```bash
cd hexo
git clone https://github.com/FastChen/hexo-theme-sujian themes/sujian
```

或

**使用 NPM 安装**

```bash
cd hexo
npm install hexo-theme-sujian
```

### 更新主题

**使用 Git 进行更新**

```bash
cd hexo/themes/sujian
git pull
```

**使用 NPM 进行更新**

```bash
cd hexo
npm install hexo-theme-sujian
```

## 配置主题

1. 将 `_config.yml` 中的 `theme:` 值设置为 `sujian` (如出现空白可尝试改用 `hexo-theme-sujian`)
2. 复制主题内的 `_config.yml` 并重命名为 `_config.sujian.yml`
3. 将 `_config.sujian.yml` 放置与 `_config.yml` 评级目录下
4. 修改 `_config.sujian.yml` 里的内容实现对主题的客制化

## 创建对应页面

可以通过命令或手动创建对应的页面，然后将格式写入对应的 `index.md` 文件中

**通过命令创建页面：**

```bash
# 创建文章分类页面
hexo new page categories
# 创建标签页面
hexo new page tags
```

**通过手动新建页面：**

1. 进入你的Hexo目录下的 `source` 文件夹
2. 新建文件夹 `categories` 与 `tags` 文件夹
3. 分别在上方创建的文件夹中新建 `index.md` 文件

**按照下方格式写入对应的格式：**

```markdown
---
title: 页面的名称例如：文章分类
type: categories 页面的类型：`categories` 或 `tags`
layout: categories 页面使用的模板：`categories` 或 `tags`
---
```

## 鸣谢

1. [Hexo](https://hexo.io/) | 没有它就没有这款主题的用武之地
2. [Bootstrap](https://getbootstrap.com/) | 主题的基础样式来源