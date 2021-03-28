const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('hello')
})
app.listen(8080, () => {
    console.log('服务器正在运行');
})