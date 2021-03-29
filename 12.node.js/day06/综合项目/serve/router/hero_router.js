// ./router/hero_router.js
const express = require('express');
const router = express.Router();
const connection = require('../util/sql')
//表单
const multer = require('multer')
const upload = multer({ dest: "uploads" })
//普通键值对解析
router.use(express.urlencoded())
// 接口1：获取所有英雄
router.get('/getHeroList', (req, res) => {
    //  🧨注意：req.query 获取 GET 请求参数
    // console.log('请求参数打印', req.query)
    let sqlStr = ``
    // 传递了英雄名称
    if (req.query.heroName) {
        // AND 关键词可用于连接多个条件
        sqlStr = `SELECT * FROM heros WHERE name='${req.query.heroName}' AND isdelete=0;`
    }
    // 没有传递英雄名称，查询所有英雄
    else {
        sqlStr = `SELECT * FROM heros WHERE isdelete=0;`
    }
    // return console.log('测试两种情况的sql语句：', sqlStr)
    // query 查询方法
    connection.query(sqlStr, (err, results) => {
        // 错误提示
        if (err) return res.status(500).send({ code: 500, msg: '服务器处理失败' })
        // 返回英雄
        res.send({ code: 200, msg: '请求成功', data: results })
    })
})

// 接口2：添加英雄数据
router.post('/addHero', (req, res) => {
    const { name, gender } = req.body;
    const sqlStr = `insert into heros (name,gender) values("${name}","${gender}")`
    connection.query(sqlStr, (err, results) => {
        if (err) return res.status(500).send({ code: 500, msg: '服务器处理失败' })
        // 返回英雄
        res.send({ code: 200, msg: '请求成功', data: results })
    })
})

// 接口3：删除单个英雄
router.get('/delHeroById', (req, res) => {
    // console.log(req.query);
    // 根据id删除数据库的表
    const { id } = req.query;
    // res.send(Id)
    const sqlStr = `update heros set isdelete=1 where id=${id}`;
    connection.query(sqlStr, (err, results) => {
        if (err) return res.status(500).send({ code: 500, msg: "服务器处理错误" })
        res.send({ code: 200, msg: '删除成功' })
    })
})

// 接口4：获取单个英雄
router.get('/getHeroById', (req, res) => {
    const { id } = req.query;
    const sqlStr = `select * from heros where id =${id}`
    // console.log(sqlStr)
    connection.query(sqlStr, (err, results) => {
        if (err) return res.status(500).send({ code: 500, msg: '服务器处理错误' })
        if (results.length === 1) {
            res.json({ code: 200, msg: '获取英雄数据成功', data: results })
        } else {
            res.json({ code: 201, msg: '英雄不存在' })
        }




    })
})

// 特殊接口：上传文件
router.post('/uploadFile', upload.single("file_data"), (req, res) => {
    res.json({
        code: 200,
        msg: '上传成功',
        src: `http://127.0.0.1:3006/uploads/${req.file.filename}`
    })
})

// 接口5：更新英雄数据
router.post('/updateHero', (req, res) => {
    //更新的参数个数不确定，所以用数组存储传来的参数
    const { id, name, gender, img } = req.body;
    console.log(req.body);
    let condition = [];
    if (name) condition.push(`name='${name}'`);
    if (gender) condition.push(`gender='${gender}'`);
    if (img) condition.push(`img='${img}'`);
    condition = condition.join()
    const sqlStr = `update heros set ${condition} where id=${id}`;
    connection.query(sqlStr, (err, results) => {
        if (err) return res.status(500).send({ code: 500, msg: '服务器处理错误' })
        res.json({ code: 200, msg: '更新数据成功' })
    })
})
module.exports = router