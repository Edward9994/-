const express = require('express')
const app = express()

const handler1 = (req, res, next) => {
    console.log(Date.now);
    next()
}
server.use(handler1)
server.user(0)


app.listen(8080, () => {
    console.log('服务器正在运行');
})