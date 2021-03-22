const fs = require('fs');
// fs.readFile('1.text', 'utf8', (err, data) => {
//     if (data) {
//         console.log(data);
//     }
// })
// 文本读取
// fs.readFile('1.text', (err, data) => {
//     if (data) {
//         console.log(data);
//     }
// })
// 图片读取
fs.readFile('banner.jpg', (err, data) => {
    if (data) {
        console.log(data);
    }
})