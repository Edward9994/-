// 目标： 实现一个web服务器，让用户可以通过url来访问我们放在public下边的文件

// 1 引用
const express = require('express')

const multer = require('multer')
const upload = multer({dest: 'uploads/'})
// console.log(express)
// 2. 创建一个服务
const server = express()

// 下边的一句的功能是：将在 请求体 中的携带的 普通键值对 解析出来，保存在req.body中
server.use(express.urlencoded())

// 下边的一句的功能是：将在 请求体 中的携带的 复杂的JSON结构数据 解析出来，保存在req.body中
server.use(express.json())

// 路由-get接口
server.get('/admin/category/search', (req,res)=> {
  console.log('收到的查询字符串中的参数是：', req.query)
  // 1. 解析出前端请求接口时传入id
  const { id } = req.query

  if(!id){
    // 链接写法
    res.status(400).json({code: 400, msg:'大姐，id呢？'})
    return
  }
  // 2. 查询工作，找这个id对应的文章类别
  //  省略......
  const data =  {
    code: 200,
    msg: '获取成功',
    data: [{id: id, name:'爱旅行', slug:'热爱旅行'}]
  }
  // 3. 返回数据
  res.json(data)
})

// 路由-post接口- 普通键值对
server.post('/admin/category/add', (req, res) => {
  console.log('本次的请求头是',req.headers)

  // 1. 接收参数
  console.log('接收参数',req.body)
  // 2. 做后续的处理（加入到数据库,.....） 省略
  // 3. 返回
  // 假设有50%有可能性成功
  if(Math.random() > 0.5) {
    res.json({code: 200, msg: '创建成功'})
  } else {
    res.json({code: 500, msg: '创建失败'})
  }
})

// 路由-post接口- json数据--复杂的嵌套的结构
// 它收到的参数是json格式的复杂对象
server.post('/admin/addAddress', (req,res)=>{
  console.log('本次的请求头是',req.headers)

  // 1. 接收参数?
  console.log('收到的数据是：',req.body)
  // 2. 设置返回值
  res.json({msg: 'aa', code: 200})

})

// 路由-post接口- 接收formData格式的参数（文件）
server.post('/admin/article/publish', upload.single('coverImage'), (req, res) => {
  console.log('本次的请求头是',req.headers)

  console.log('接收到的文件是', req.file);
  console.log('接收到的参数是', req.body);
  res.end('/admin/article/publish')
})

// 3. 启动这个服务
server.listen(8001, () => {
  console.log('你的express服务器已经在8001端口启动了')
})
