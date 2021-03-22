const fs = require('fs')
// fs.writeFile(路径，覆盖内容，回调函数)
fs.writeFile('1.text', '我被覆盖了', function (err) {
    console.log('发生的错误', err);
})