const express = require('express')
const server = express()
const conn = require('./01-mysql')
server.use(express.urlencoded())
server.post('/adduser', (req, res) => {
    // console.log(req.body);
    const { name, age } = req.body;
    console.log(name, age);
    const sqlStr = `insert into stu(name,age) values('${name}',${age})`;
    conn.query(sqlStr, (err, result) => {
        if (err) {
            console.log('505', err);
            return
        }
        console.log('成功', result);
    })
})

server.listen(8080, () => {
    console.log('服务器正在运行');
})