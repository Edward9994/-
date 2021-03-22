$(function () {
  whatScreen();
  // 屏幕的宽度变化，动态获取当前屏幕的宽度 width
  // width <768px....
  // 动态的把屏幕的种类打印到title标签上 
  function whatScreen() {
    //   xs <768 sm 768-992 md 992-1200 lg >1200  

    // 屏幕的种类和 宽度
    var strTitle = "";

    // 获取屏幕的宽度
    // var screenWidth = window.screen.width;
    var screenWidth = document.querySelector("html").offsetWidth;

    // title标签
    var domTitle = document.querySelector("title");

    // 判断当前屏幕的种类
    if (screenWidth <= 768) {
      // 极小屏幕
      strTitle = "极小屏幕:" + screenWidth;
    } else if (screenWidth > 768 && screenWidth <= 992) {
      // 小屏幕
      strTitle = "小屏幕:" + screenWidth;
    } else if (screenWidth > 992 && screenWidth <= 1200) {
      // 中等屏幕
      strTitle = "中等屏幕:" + screenWidth;
    } else if (screenWidth > 1200) {
      // 大屏幕
      strTitle = "大等屏幕:" + screenWidth;
    }

    // 把屏幕种类打印到title标签上
    domTitle.innerText = strTitle;
  }


  // 屏幕的宽度改变事件resize 
  window.onresize = function () {
    // console.log(123);
    whatScreen();
  }

})