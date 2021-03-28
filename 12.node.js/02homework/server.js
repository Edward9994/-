// 用express框架

// 1. 静态页面托管
//    localhost:3000/index.html可以访问public下的index.html文件
const express = require('express')
const app = express()
const multer = require('multer')
// 解决跨域问题
const cors = require('cors')
// 表单
const upload = multer({ dest: './upload' })
app.use(cors())
app.use(express.static('public'))

//解析json数据
app.use(express.json())
//解析键值对
app.use(express.urlencoded())
// 2. 写接口
//    在后端实现三个接口，分别来处理在index.html中发出的post请求：
//    只需要在后端接收到参数即可

// 2.0 get传递普通键值对
let data = { code: 200, msg: '获取成功', data: [{ id: 2, name: '爱旅行', slug: '热爱旅行' }] }


app.get('/list', (req, res) => {
    //后端接收的数据存在req.body里面
    const { id } = req.query
    if (id != 2) {
        // res.status(404).json({ code: 400, msg: '大姐id呢？' });
        console.log('111');
        return
    }
    // 反对数据
    // res.json(data)
    // data = JSON.stringify(data)
    // console.log(data);
    // 解决跨域问题
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data)
    res.end()
})


// 2.1.post传递普通键值对
// url: 'http://localhost:3000/post',
app.post('/post', (req, res) => {
    //后端接收的数据存在req.body里面
    console.log(req.body);
    res.end()
})

// 2.2 post传递json
// url: 'http://localhost:3000/postJSON',
app.post('/postJSON', (req, res) => {
    //后端接收的数据存在req.body里面
    console.log(req.body);
    res.end()
})

// 2.3 post传递
// url: 'http://localhost:3000/admin/article_publish',
app.post('/admin/article_publish', upload.single('cover'), (req, res) => {
    //后端接收的数据存在req.body里面
    console.log(req.body);
    res.end()
})
app.listen(3000, () => {
    console.log('服务器正在运行');
})