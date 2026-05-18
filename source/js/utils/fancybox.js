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
    Image: { zoom: true },
    l10n: {
      NEXT: window.FANCYBOX_I18N.NEXT,
      PREV: window.FANCYBOX_I18N.PREV,
      ZOOM_IN: window.FANCYBOX_I18N.ZOOM_IN,
      ZOOM_OUT: window.FANCYBOX_I18N.ZOOM_OUT,
      TOGGLE_FULL: window.FANCYBOX_I18N.TOGGLE_FULL,
      ROTATE_CCW: window.FANCYBOX_I18N.ROTATE_CCW,
      ROTATE_CW: window.FANCYBOX_I18N.ROTATE_CW,
      FLIP_X: window.FANCYBOX_I18N.FLIP_X,
      FLIP_Y: window.FANCYBOX_I18N.FLIP_Y,
      RESET: window.FANCYBOX_I18N.RESET,
      TOGGLE_AUTOPLAY: window.FANCYBOX_I18N.TOGGLE_AUTOPLAY,
      TOGGLE_FULLSCREEN: window.FANCYBOX_I18N.TOGGLE_FULLSCREEN,
      TOGGLE_THUMBS: window.FANCYBOX_I18N.TOGGLE_THUMBS,
      CLOSE: window.FANCYBOX_I18N.CLOSE,
      IMAGE_ERROR: window.FANCYBOX_I18N.IMAGE_ERROR,
    },
  });
});