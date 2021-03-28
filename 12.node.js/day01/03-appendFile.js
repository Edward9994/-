const fs = require('fs');
fs.appendFile('2.text', "\n我是新加的句子", function (err) {
    if (err) {
        console.info(err);
        throw err
    }
    console.log('插入新数据成功');
})