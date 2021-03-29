// router\user_router.js
const express = require('express');
const router = express.Router();
const connection = require('../util/sql')
const jwt = require('jsonwebtoken')
router.use(express.urlencoded())
// 接口：注册
router.post('/register', (req, res) => {
    const userInfo = { username: req.body.userName, password: req.body.userPwd }
    // console.log('用户信息', userInfo)
    connection.query(`select * from user where username="${userInfo.username}"`, (err, results) => {
        // 服务器错误
        if (err) return res.json({ code: 500, msg: "服务器错误!" });
        // 用户名被占用
        if (results.length > 0) return res.json({ code: 201, msg: "此用户名已被占用！" });
        // 注册信息存入数据库
        connection.query(`INSERT INTO user set ?;`, [userInfo], (err, results) => {
            if (err) return res.status(500).send({ code: 500, msg: '服务器处理失败' })
            // console.log('结果', results)
            if (results.affectedRows === 1) {
                res.send({ code: 200, msg: '注册成功' })
            } else {
                res.send({ code: 201, msg: '注册失败' })
            }
        })

    })

})

// 接口：登录
router.post('/login', (req, res) => {
    // 获取前端传递过来的用户名和密码
    const { userName, userPwd } = req.body
    // console.log(req.body);
    // console.log({ userName, userPwd })
    // 登录的校验其实就是一个查询语句
    connection.query(
        `SELECT * FROM  user WHERE username="${userName}" AND password="${userPwd}"`,
        (err, results) => {
            if (err) return res.status(500).send({ code: 500, msg: '服务器处理失败' })
            // console.log('查询结果', results)
            // 如果查询到有结果，说明用户名和密码正确
            if (results.length) {
                // 把 token 字符串响应给浏览器
                // 调用生成 token 的方法
                const tokenStr = jwt.sign({ name: 'xxx' }, 'heima61', { expiresIn: 60 * 60 * 12 * 2 });
                const token = 'Bearer ' + tokenStr
                // 把 token 字符串 返回 给客户端浏览器
                res.send({ code: 200, msg: '登录成功', token })
            } else {
                res.send({ code: 201, msg: '登录失败' })
            }
        }
    )
})

module.exports = router;