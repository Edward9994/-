// 0. 加载 Express
const express = require('express')

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express()

app.use(express.urlencoded())
// 路由
// app.请求方式(地址,回调)

app.get('/articles', (req,res)=>{
  res.json({list: ['xxx', 'yyyy']})
})

app.post('/articles', (req,res)=>{
  res.json({msg: '添加成功'})
})

app.delete('/articles', (req,res)=>{
  console.log('本次收到的请求体中的参数是', req.body);
  res.json({msg: '删除成功'})
})

app.put('/articles', (req,res)=>{
  console.log('本次收到的请求体中的参数是', req.body);
  res.json({msg: '修改成功'})
})

// 3. 监听端口号，启动 Web 服务
app.listen(8080, () => console.log('app listening on port 8080!'))
