const express = require('express')

const app = express()

function getClientIp(req) {
  return req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
}

app.use((req,res,next) => {
  console.log('我来用记录访问日志')
  // 获取当前用户访问的页面地址： req.url
  // 获取当前用户的id的地址: ?
  // 当前时间
  const dt = new Date()
  console.log(dt.toLocaleTimeString())
  console.log(req.url)
  console.log('来自：', getClientIp(req));

  // fs写入某个日志文件中

  next();
})

// 定义一个中间件
// req是指本次请求
// res是指本次响应
// next() ：允许进入到下一个中间级
const handler1 = (req, res, next) => {
  console.log('我是hanlder1这个中间件')
  next()
}

app.use((req,res,next) => {
  console.log('我是a， 当前的时间是', Date.now())
  next()
  //res.end('ok')
})

app.use((req,res,next) => {
  console.log('我是b， 当前的时间是', Date.now())
  next()
  //res.end('ok')
})

app.use('/apiname', (req,res,next) => {
  console.log('app.use(/apiname)执行了')
  next()
})

app.post('/apipost',(req,res,next)=>{
  console.log('app.post(/apipost)执行了内部的中间件')
  next()
}, (req,res,next) => {
  console.log('app.post(/apipost)执行了')
  next()
})

// 使用中间件
app.use(handler1)

app.listen(3000, () => {
  console.log('您的应用已经在3000端口就绪了');
})