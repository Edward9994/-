const fs = require('fs');
fs.appendFile('1.text', "\n我是新加的句子", function (err) {
    if (err) {
        console.info(err);
        throw err
    }
})