$(function () {
    //点击去注册，跳转到注册页面
    $('#link_reg').click(function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    //点击去登录，跳转到登录页面
    $('#link_login').click(function () {
        $('.reg-box').hide()
        $('.login-box').show()
    })
    //注册表单校验
    let form = layui.form;
    let layer = layui.layer;
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        repwd: function (value) {
            let pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })

    //ajax发起注册请求
    $('#form_reg').on('submit', function (e) {
        e.preventDefault()
        const username = $('#form_reg [name=username]').val()
        const password = $('#form_reg [name=password]').val()
        $.ajax({
            type: 'post',
            url: '/api/reguser',
            data: { username, password },
            success: (res) => {
                if (res.status != 0) return layer.msg(res.message)
                layer.msg('注册成功，请登录')
                $('#link_login').click()

            }
        })
    })
    //发起登录请求
    $('#form_login').on('submit', function (e) {
        e.preventDefault()
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $(this).serialize(),
            success: (res) => {
                if (res.status != 0) return layer.msg('登录失败，用户名密码错误！')
                layer.msg('登录成功！')
                localStorage.setItem('token', res.token)
                location.href = '/10-大事件后台/独立版02/index.html'
            }
        })
    })
})