// 0.第三方模块引入
// 1.mysql模块引入入
// 2.express 服务器建立
// 3.post接口，接收请求
// 4.解析键值对为对象，对象值添加到Mysql


// 需求:/adduser  添加用户名 年龄
const con = require("./mysql")
const express = require('express')
const app = express()
// const cors = require('cors')
// app.use(cors())
app.use(express.urlencoded())

app.post('/adduser', (req, res) => {
    const { name, age } = req.body;
    const sqlStr = `insert into stu(name,age) values('${name}',${age})`;
    con.query(sqlStr, (err, result) => {
        if (err) return res.status(500).json({ msg: '添加失败', code: 500 });
        res.json({ msg: "添加成功", code: 200 });
    })
})


app.listen(8080, () => {
    console.log('服务器正在运行');
})