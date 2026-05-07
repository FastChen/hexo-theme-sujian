document.addEventListener('DOMContentLoaded', function() {
  // 初始化 Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: true,
    dragToClose: true,
    Image: { zoom: true }
  });

  console.log('Fancybox 已初始化');
});