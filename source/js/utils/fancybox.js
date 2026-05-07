document.addEventListener('DOMContentLoaded', function () {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
      Toolbar: {
        display: {
          left: ["counter"],
          middle: [
            "zoomIn",
            "zoomOut",
            "toggle1to1",
            "rotateCCW",
            "rotateCW",
            "flipX",
            "flipY",
            "reset",
          ],
          right: ["autoplay", "fullscreen", "thumbs", "close"],
        },
      },
    },
    Hash: false,
    Thumbs: false,
    dragToClose: true,
    Image: { zoom: true }
  });

  console.log('Fancybox v6 已初始化');
});