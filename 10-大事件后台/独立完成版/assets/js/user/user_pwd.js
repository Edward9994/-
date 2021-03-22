$(function () {
    let form = layui.form;
    //表单校验
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        // 新旧密码不能一致
        samePwd: function (value) {
            if (value === $('[name=oldPwd]').val()) {
                return '新密码不能与旧密码一致'
            }
        },
        // 两次密码输入不一致
        rePwd: function (value) {
            if (value !== $('[name=newPwd]').val()) {
                return '两次密码输入不一致'
            }
        }
    })

    //表单重置
    $('.layui-form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: (res) => {
                if (res.status !== 0) {
                    return layui.layer.msg(res.message)
                }
                layui.layer.msg('密码修改成功')
                //id不能为reset，否则会报错
                $('.layui-form')[0].reset();

            }
        })
    })
})