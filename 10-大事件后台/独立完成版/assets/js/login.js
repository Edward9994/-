$(function () {
    //点击去注册，隐藏登录页面，显示注册页面
    $('#link_reg').click(function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    //点击去登录，隐藏注册页面,显示登录页面
    $('#link_login').click(function () {
        $('.reg-box').hide()
        $('.login-box').show()
    })

    let form = layui.form;
    let layer = layui.layer;
    // 自定义校验规则
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        //value就是输入框的值
        repwd: function (value) {
            if (value !== $('#form_reg [name=password]').val()) {
                return '两次密码输入不一致'
            }
        }
    })
    //注册模块
    $('#form_reg').submit(
        function (e) {
            e.preventDefault();
            $.ajax({
                type: 'post',
                url: '/api/reguser',
                data: $(this).serialize(),
                success: (res) => {
                    if (res.status !== 0) {
                        return layer.msg(res.message)
                    }
                    layer.msg('注册成功，请登录')
                    $('#link_login').click()
                }
            })
        }
    )
    // 登录模块
    $('#form_login').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $(this).serialize(),
            success: (res) => {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                localStorage.setItem('token', res.token)
                layer.msg('登录成功')
                location.href = 'index.html'
            }
        })
    })

})