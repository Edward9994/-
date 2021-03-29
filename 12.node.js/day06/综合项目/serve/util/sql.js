var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',   // 你要连接的数据库服务器的地址
    user: 'root',        // 连接数据库服务器需要的用户名
    password: '123456',        // 连接数据库服务器需要的密码
    database: 'herodb'      //你要连接的数据库的名字
});

connection.connect((err) => {
    // 如果有错误对象，表示连接失败
    if (err) return console.log('数据库连接失败')
    // 没有错误对象提示连接成功
    console.log('mysql数据库连接成功')
})
module.exports = connection;