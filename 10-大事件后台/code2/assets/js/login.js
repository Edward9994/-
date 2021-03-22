$(function () {
    // 需求1: 点击a链接，显示隐藏盒子;
    $("#link_reg").on("click", function () {
        // 登录模块里面的a链接被点击，显示注册盒子，隐藏登录盒子;
        $(".login-box").hide();
        $(".reg-box").show();
    });
    $("#link_login").on("click", function () {
        // 注册模块里面的a链接被点击，显示登录盒子，隐藏注册盒子;
        $(".reg-box").hide();
        $(".login-box").show();
    });

    // 需求2: 自定义 layui 校验规则
    // console.log(layui)  
    let form = layui.form;
    // verify()的参数是一个对象
    form.verify({
        // 属性是校验规则名称，值是函数或者数组
        pwd: [
            /^[\S]{6,12}$/,
            '密码必须6到12位，且不能出现空格'
        ],
        // 重复密码校验规则
        repwd: function (value, item) { //value：表单的值、item：表单的DOM对象
            // // 重复密码里面input的value值
            // console.log(value);
            // console.log($(".reg-box input[name=password]").val());
            if (value != $(".reg-box input[name=password]").val()) {
                return "两次密码输入不一致，请重新输入！"
            }
        }
    });

    // 需求3: 注册用户
    let layer = layui.layer;
    $("#form_reg").on("submit", function (e) {
        // 阻止表单默认提交
        e.preventDefault();
        // 发送ajax
        // ajax三板斧：1.console   2.请求 type,url,data   3.响应体
        $.ajax({
            type: 'POST',
            url: '/api/reguser',
            data: {
                username: $(".reg-box input[name=username]").val(),
                password: $(".reg-box input[name=password]").val()
            },
            success: function (res) {
                // console.log(res)
                if (res.status != 0) {
                    // return alert(res.message);
                    return layer.msg(res.message, { icon: 5 });
                }
                // 提示成功
                // alert("恭喜您，用户名注册成功！");
                layer.msg("恭喜您，用户名注册成功！", { icon: 6 });
                // 切换回登录模块
                $("#link_login").click();
                // 表单清空
                $("#form_reg")[0].reset();
            }
        });
    });

    // 需求4: 用户登录
    $("#form_login").on("submit", function (e) {
        // 阻止表单默认提交
        e.preventDefault();
        // 发送ajax
        // ajax三板斧：1.console   2.请求 type,url,data   3.响应体
        $.ajax({
            type: 'POST',
            url: '/api/login',
            data: $(this).serialize(),
            success: function (res) {
                // 错误提示
                if (res.status != 0) {
                    return layer.msg(res.message, { icon: 5 });
                }
                // 成功后操作，跳转页面，保存token
                location.href = "./index.html";
                localStorage.setItem("token", res.token);
            }
        });
    })

});