$(function () {
  function whatScreen() {
    var width = document.querySelector("html").offsetWidth;
    var title = document.querySelector("title");
    if (width <= 768) {
      title.innerHTML = "极小屏幕-" + width;
    } else if (width > 768 && width <= 992) {
      title.innerHTML = "小屏幕-" + width;
    } else if (width > 992 && width <= 1200) {
      title.innerHTML = "普通屏幕-" + width;
    } else if (width > 1200) {
      title.innerHTML = "大屏幕-" + width;
    }
  }
  whatScreen();
  window.onresize=function () {
    whatScreen();
  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
})