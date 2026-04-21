hexo.extend.filter.register('after_post_render', function(data) {
  // 为所有 <blockquote> 标签添加 class="my_blockquote"
  data.content = data.content.replace(
    /<blockquote(.*?)>/g,
    function(match, attrs) {
      if (attrs && attrs.includes('class=')) {
        return match.replace(/class=(["'])(.*?)\1/, `class=$1$2 blockquote$1`);
      } else {
        return `<blockquote${attrs} class="blockquote">`;
      }
    }
  );
  return data;
});