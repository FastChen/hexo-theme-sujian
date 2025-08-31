hexo.extend.filter.register('after_post_render', function(data) {
  // 替换 th 的 align 属性为 style
  data.content = data.content.replace(
    /<th(.*?)align="(left|right|center)"(.*?)>/g, 
    '<th$1style="text-align: $2;"$3>'
  );
  
  // 替换 td 的 align 属性为 style（可选）
  data.content = data.content.replace(
    /<td(.*?)align="(left|right|center)"(.*?)>/g, 
    '<td$1style="text-align: $2;"$3>'
  );
  
  return data;
});