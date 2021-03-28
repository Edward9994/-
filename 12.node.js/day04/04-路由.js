// 目标：实现一个web服务器，让用户可以url来访问我们放在public下边的文件
const express = require('express')
const app = express()
// 托管静态资源
// use是一个方法，它的实参是：express('public')
// 把public下边的内容直接交给express做托管
// 当服务器收到用户请求，会去public下边找这个文件，如果找到就直接返回
// app.METHOD(PATH,HANDLER)
// server.请求类型（请求地址，回调函数）
// 后端的路由==前端的接口

app.get('/abc', (req, res) => {
    // 转为json数据写出
    // const data = [{ msg: '请求成功', status: '201' }]
    // res.json(data)


    // express框架会自动收集get方式从url地址中传递的查询字符串参数解析为对象，并自动保存在req.query属性e中
    console.log(req.query);


    // res.end(
    //     'hello，world'
    // )
})

// 启动这个服务器
app.listen(8080, () => {
    console.log('服务器正在运行')
})