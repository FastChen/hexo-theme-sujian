hexo.extend.filter.register('after_post_render', function (data) {
    // 正则匹配所有 "文章" 的 img 标签，并添加class
    const regex = /<img([^>]*)>/g;
    const replacement = '<img class="img-fluid"$1>';

    // 针对文章生效
    data.content = data.content.replace(regex, replacement);
    // 针对首页摘要生效
    if (data.excerpt) {
        data.excerpt = data.excerpt.replace(regex, replacement);
    }
    return data;
});