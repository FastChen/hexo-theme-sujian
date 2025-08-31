hexo.extend.filter.register('after_post_render', function(data) {
  // 使用正则排除 figure 内的代码块 table
  data.content = data.content.replace(
    /<table(?!.*<\/figure>)(.*?)>/g,
    '<table class="border table table-striped table-hover"$1>'
  );
  return data;
});