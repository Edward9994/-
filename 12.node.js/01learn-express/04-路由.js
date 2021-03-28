// 目标： 实现一个web服务器，让用户可以通过url来访问我们放在public下边的文件

// 1 引用
const express = require('express')

console.log(express)
// 2. 创建一个服务
const server = express()

// 希望用户访问某一个地址时：http://localhost:8001/abc ，给用户一些反馈: 返回hello world
// 这就是路由

// 如果收到用户用get方式来请求/getInfo,就执行这个回调函数

// get,post,delete,put,patch...
server.get('/getInfo', (req,res)=> {
  // 省略一些计算，求值的操作
  const data = {msg: '请求成功', status: 200, list: ['xxxx', 'yyyy']}
  res.json(data)
  // res.end('hello, world')
})

// 3. 启动这个服务
server.listen(8001, () => {
  console.log('你的express服务器已经在8001端口启动了')
})
