// 目标： 写一个用来做添加用户接口
//    地址： localhost:3000/user/add
//    类型： post
//    参数： name, age, phone
//    备注： 数据要写入数据库

// 步骤：
// 1.模块引入
// 2.express 服务器建立
// 3.post接口 + 数据解析
// 4.sql语句拼接+sql请求

const con = require("./mysql")
const express = require('express')
const server = express()
//跨域解决
const cors = require('cors')
server.use(cors())

//键值对数据解析
server.use(express.urlencoded())

server.post('/adduser', (req, res) => {
    //解构赋值
    const { name, age, phone } = req.body;
    //sql语句拼接
    const sqlStr = `insert into stu (name,age,phone) values('${name}',${age},'${phone}')`;
    //sql请求
    con.query(sqlStr, (err, result) => {
        if (err) return res.status(500).json({ msg: '添加失败', code: 500 });
        res.json({ msg: "添加成功", code: 200 });
    })
})

server.listen(8080, () => {
    console.log('服务器正在运行');
})