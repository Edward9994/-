const mysql = require('mysql')
let connection = mysql.createConnection({ host: 'localhost', port: '3006', user: 'root', password: '123456', database: 'test' });
connection.connect(err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('1');
})
module.exports = connection;