
const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer({ dest: 'upload/' })
// 路由-get接口
app.get('/admin/category/search', (req, res) => {
    // express框架会自动收集get方式从url地址中传递的查询字符串参数解析为对象，并自动保存在req.query属性e中
    // 1解析出前端请求接口时传入id
    const { id } = req.query
    // 2.查询规则，找到这个id对应的文章类别
    if (!id) {
        // 链式写法
        res.status(404).json({ code: 400, msg: '大姐id呢？' })
        return
    }
    const data = {
        code: 200,
        msg: '获取成功',
        data: [{ id: 2, name: '爱旅行', slug: '热爱旅行' }]
    }
    // 反对数据
    res.json(data)
    res.end('ok')

})
//下边的这一句的功能是，将请求体中携带的普通键值对解析出来，保存在req.body中
app.use(express.urlencoded())
app.use(express.json())
// 路由post接口
app.post('/admin/category/add', (req, res) => {

    // 1.接收参数
    console.log(req.body);
    // 2.做后续的处理
    // 3.返回
    res.end('ok')
})

// 路由 - post接口 - json数据--复杂的嵌套的结构
// 它收到的参数是json格式的复杂对象
// 启动这个服务器
app.post('/admin/category/addAddress', (req, res) => {
    console.log(req.body);
    res.end('ok')
})

// 路由 - post接口，文件类型
app.post('/admin/category/publish', upload.single('cover'), (req, res) => {
    // 普通键值对在req.body里面
    // 文件在req.file

})
app.listen(8080, () => {
    console.log('服务器正在运行')
})