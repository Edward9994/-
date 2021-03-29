$(function () {
  // 发起ajax请求
  init()
})

function init() {
  $.ajax({
      url: '/getHeroList',
      headers: {
        authorization: window.localStorage.getItem('token')
      },
      success: function (res) {
          console.log(res)
          // 调用模板引擎
          let html = template('herosTemp', res)
          $('#tbody').html(html)
      }
  })
}

function del(id) {
  if (confirm('请问是否真的需要删除')) {
      $.ajax({
          url: '/delHeroById?id=' + id,
          headers: {
            authorization: window.localStorage.getItem('token')
          },
          success: function (res) {
              console.log(res)
              if (res.code) {
                  alert(res.msg)
                  // 刷新
                  // location.href='./index.html'
                  init()
              }
          }
      })
  }
}