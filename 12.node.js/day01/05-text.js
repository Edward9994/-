const fs = require('fs')
const path = require('path')
// let obj = [{ name: '小李' }, { name: '小林' }, { name: '小新' }];
// obj = JSON.stringify(obj)
// fs.writeFile('name.text', obj, function (err) {
//     if (err) throw console.log('错误', err);
// })
//加绝对路径的必要性
// 比如C: \Users\陈荣华\Desktop\黑马日记\12.node.js\      node .\day01\05 - text.js进入
// 就会找不到name.text, 因为计算机只在，node.js里面一级找, name.text
const filePath = path.join(__dirname, 'name.text');

// console.log(filePath);
fs.readFile(filePath, function (err, data) {
    if (err) throw console.log('错误', err);
    data = JSON.parse(data);
    let newobj = { name: '小明' };
    data.push(newobj);
    // console.log(data);
    data = JSON.stringify(data);
    fs.writeFile(filePath, data, function (err) {
        if (err) throw console.log('错误', err);
    })
})
