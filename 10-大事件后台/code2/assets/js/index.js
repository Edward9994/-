// 入口函数
$(function () {
    // 需求1: ajax获取用户信息，渲染到页面
    //   这个功能，后面其他的页面/模块还要用，所以必须设置为全局函数;
    getUserInfo();
    var layer = layui.layer

    // 点击按钮，实现退出功能
    $('#btnLogout').on('click', function () {
        // 提示用户是否确认退出
        console.log(1);
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
            //do something
            // 1. 清空本地存储中的 token
            localStorage.removeItem('token')
            // 2. 重新跳转到登录页面
            location.href = 'login.html'

            // 关闭 confirm 询问框
            layer.close(index)
        })
    })


});

$('#shouye').click();
// 必须保证这个函数是全局的，后面其他功能要用
function getUserInfo() {
    $.ajax({
        url: '/my/userinfo',
        // 配置头信息，设置token，身份识别认证！
        // headers: {
        //     Authorization: localStorage.getItem("token") || ""
        // },
        // // 不论成功还是失败，最终都会调用 complete 回调函数
        // complete: function (res) {
        //     // console.log('执行了 complete 回调：')
        //     // console.log(res)
        //     // 在 complete 回调函数中，可以使用 res.responseJSON 拿到服务器响应回来的数据
        //     if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
        //         // 1. 强制清空 token
        //         localStorage.removeItem('token')
        //         // 2. 强制跳转到登录页面
        //         location.href = 'login.html'
        //     }
        // },
        success: function (res) {
            // console.log(res);
            if (res.status != 0) {
                return layui.layer.msg(res.message, { icon: 5 });
            }
            // 头像和文字渲染
            renderAvatar(res.data);

        }
    });
}

// 头像和文字渲染封装
function renderAvatar(user) {
    // console.log(user);
    // 1.渲染用户名，如果有昵称以昵称为准
    let name = user.nickname || user.username;
    $("#welcome").html("欢迎&nbsp;&nbsp;" + name);
    // 2.渲染头像; 判断图片头像是否存在
    if (user.user_pic == null) {
        // 隐藏图片头像, 渲染文字头像
        $(".layui-nav-img").hide();
        $(".text-avatar").show().html(name[0].toUpperCase());
    } else {
        // 渲染图片头像，隐藏文字头像
        $(".layui-nav-img").show().attr("src", user.user_pic);
        $(".text-avatar").hide();
    }
}
