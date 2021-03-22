$(function () {
    getUserInfo();

    //点击退出跳转到登录页面
    let layer = layui.layer;
    $('#btnLogout').click(function () {
        layer.confirm('确认退出登录？', { icon: 3, title: '提示' }, function (index) {
            localStorage.removeItem('token')
            location.href = 'login.html'
            layer.close(index);
        });


    })

})

//获取用户信息
function getUserInfo() {
    $.ajax({
        type: 'get',
        url: '/my/userinfo',
        success: (res) => {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败！')
            }
            // 渲染用户头像
            renderAvatar(res.data);
        }
    })
}
// 用户头像渲染
function renderAvatar(user) {
    var name = user.nickname || user.username;
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic).show();
        $('.text-avatar').hide();
        // console.log(1);
    } else {
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar')
            .html(first)
            .show()
        // console.log(2);
    }
    // console.log(user);
}
