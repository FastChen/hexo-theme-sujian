hexo.extend.filter.register('after_render:html', function (html) {
  // 为表格添加 CSS 类
  html = html.replace(
    /<table(?!.*<\/figure>)(.*?)>/g,
    '<table class="border table table-striped table-hover"$1>'
  );

  // 替换 th 的 align 属性为 style
  html = html.replace(
    /<th(.*?)align="(left|right|center)"(.*?)>/g, 
    '<th$1style="text-align: $2;"$3>'
  );
  
  // 替换 td 的 align 属性为 style
  html = html.replace(
    /<td(.*?)align="(left|right|center)"(.*?)>/g, 
    '<td$1style="text-align: $2;"$3>'
  );

  return html;
});