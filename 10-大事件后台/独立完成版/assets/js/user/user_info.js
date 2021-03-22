$(function () {
    //校验表单数据
    let form = layui.form;
    form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return '昵称的长度必须在1~6个字符之间'
            }
        }
    })
    // console.log(form);
    //表单初始化
    initUserInfo();
    function initUserInfo() {
        $.ajax({
            type: 'get',
            url: '/my/userinfo',
            success: (res) => {
                if (res.status !== 0) {
                    return layui.layer.msg(res.status)
                }
                // console.log(res);
                // 为表单赋值
                form.val('formUserInfo', res.data)
            }
        })
    }
    //表单重置
    $('#btnReset').click(
        function (e) {
            e.preventDefault();
            initUserInfo();

        }
    )

    // 监听表单的提交事件
    $('.layui-form').on('submit', function (e) {
        // 阻止表单的默认提交行为
        e.preventDefault()
        // 发起 ajax 数据请求
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('更新用户信息失败！')
                }
                layer.msg('更新用户信息成功！')
                // 调用父页面中的方法，重新渲染用户的头像和用户的信息
                // console.log(window.parent.getUserInfo());
            }
        })
    })
})