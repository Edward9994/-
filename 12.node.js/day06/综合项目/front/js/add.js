// 实现文件上传
function upload() {
  let myfile = $('#img')[0].files[0];
  let formdata = new FormData();
  formdata.append('img', myfile);
  $.ajax({
    type: 'post',
    url: '/uploadFile',
    data: formdata,
    headers: {
      authorization: window.localStorage.getItem('token'),
    },
    processData: false, // 告诉ajax不要进行数据的处理，formdata自己来处理
    contentType: false, // 造成ajax不要对数据编码，formdata自己来编码
    success: function (res) {
      console.log(res);
      if (res.code == 200) {
        // 实现图片预览
        $('#photo').attr('src', '/uploads/' + res.img);
        // 将图片名称存储到指定的隐藏域
        $('.userimg').val(res.img);
      }
    },
  });
}
// 实现英雄数据的添加
function add() {
  $.ajax({
    type: 'post',
    url: '/addHero',
    data: $('#myform').serialize(),
    headers: {
      authorization: window.localStorage.getItem('token'),
    },
    success: function (res) {
      console.log(res);
      if (res.code == 200) {
        alert(res.msg);
        // 刷新--回到首页
        location.href = './index.html';
      }
    },
  });
}
