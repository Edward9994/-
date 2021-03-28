const mysql = require('mysql')
const http = require('http')
let connection = mysql.createConnection({ host: 'localhost', port: '3306', user: 'root', password: '123456', database: 'test' });
connection.connect(err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('1');
})

// 删除
// const sqlStr = 'delete from stu where id=2';
// connection.query(sqlStr, (err, result) => {
//     if (err) {
//         console.log('删除错误', err);
//         return
//     }
//     console.log('删除结果:', result);
//     if (result.affectRows > 0) {
//         console.log('删除成功');
//     } else {
//         console.log('删除失败');
//     }
// })

const sqlStr = "insert into stu(id,name,age) values(2,'理性',11)";
connection.query(sqlStr, (err, result) => {
    if (err) {
        console.log('插入错误', err);
        return
    }
    console.log('插入结果:', result);
    if (result.affectRows > 0) {
        console.log('插入成功');
    } else {
        console.log('插入失败');
    }
})