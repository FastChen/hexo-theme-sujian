// document.addEventListener('DOMContentLoaded', function() {
//   var backToTop = document.getElementById('back-to-top');

//   window.addEventListener('scroll', function() {
//     if (window.pageYOffset > 300) {
//       backToTop.classList.add('show');
//     } else {
//       backToTop.classList.remove('show');
//     }
//   });

//   backToTop.addEventListener('click', function(e) {
//     e.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  var backToTop = document.getElementById('back-to-top');
  if (!backToTop) return;

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      backToTop.classList.remove('d-none');
    } else {
      backToTop.classList.add('d-none');
    }
  });

  backToTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});