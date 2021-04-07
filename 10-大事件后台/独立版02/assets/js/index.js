$(function () {
    // 获取用户基本信息
    getUserInfo()
    function getUserInfo() {
        $.ajax({
            type: 'get',
            url: '/my/userinfo',
            success: (res) => {
                if (res.status !== 0) return layui.layer.msg('获取用户信息失败!')
                renderAvatar(res.data)
            }
        })
    }
    // 用户名,头像
    function renderAvatar(data) {
        let name = data.username || data.nickname;
        // 无头像,显示字母,隐藏图片
        if (data.user_pic === null) {
            $('.layui-nav-img').hide();
            let fist = name[0].toUpperCase()
            $('.text-avatar').html(fist).show()
        } else {
            $('.text-avatar').hide();
            $('.layui-nav-img').attr('src', data.user_pic).show()
        }
    }

    var layer = layui.layer

    // 点击按钮，实现退出功能
    $('#btnLogout').on('click', function () {
        // 提示用户是否确认退出
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
            //do something
            // 1. 清空本地存储中的 token
            localStorage.removeItem('token')
            // 2. 重新跳转到登录页面
            location.href = '/10-大事件后台/独立版02/login.html'

            // 关闭 confirm 询问框
            layer.close(index)
        })
    })
})