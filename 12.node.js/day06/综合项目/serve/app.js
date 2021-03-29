// express 模块：创建服务器的模块
const express = require('express')
const server = express()
const cors = require('cors')

// 身份认证
const jwt = require('express-jwt');

server.use('/uploads', express.static('uploads'))
// app.use(jwt().unless());
// jwt() 用于解析token，并将 token 中保存的数据 赋值给 req.user
// unless() 约定某个接口不需要身份认证
server.use(jwt({
    secret: 'heima61', // 生成token时的 钥匙，必须统一
    algorithms: ['HS256'] // 必填，加密算法，无需了解
}).unless({
    path: ['/user/login', '/user/register', /^\/uploads\/.*/] // 补充对uploads的请求
}));
//身份认证失败
server.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        // res.status(401).send('invalid token...');
        res.status(401).send({ status: 1, message: '身份认证失败！' });
    }
});


const userRouter = require('./router/user_router');
const heroRouter = require('./router/hero_router');
server.use(cors())
server.use('/user', userRouter);
server.use('/hero', heroRouter);

server.get('/test', (req, res) => {
    res.send({ code: 200, msg: 'ok' })
})

server.listen(3006, () => console.log('服务器启动成功提示'))