const mysql = require('mysql')
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
})
con.connect(err => {
    if (err) return console.log('数据库连接失败', err);
    console.log('数据库连接成功');
})
// 模块出口
module.exports = con;