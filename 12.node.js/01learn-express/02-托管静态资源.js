// 目标： 实现一个web服务器，让用户可以通过url来访问我们放在public下边的文件

// 1 引用
const express = require('express')

console.log(express)
// 2. 创建一个服务
const server = express()

// 进行静态资源托管
// use是一个方法，它的实参是：express.static('public')

// 把public下边的内容直接交给express做托管
// 当服务器收到用户的请求，会去public下边找这个文件，如果找到就直接返回

server.use(express.static('public'))

// http://localhost:8001/abc/index.html  ----> 会返回company2下边的index.html
server.use('/abc', express.static('company2'))

// 3. 启动这个服务
server.listen(8001, () => {
  console.log('你的express服务器已经在8001端口启动了')
})
