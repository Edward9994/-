const fs = require('fs')
let obj = { name: '李白', skin: '凤求凰' };
obj = JSON.stringify(obj)
fs.writeFile('1.text', obj, function (err) {
    if (err) {
        throw err
    }
    console.log('写入成功');
});
