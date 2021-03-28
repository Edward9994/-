const http = require('http')
const fs = require('fs')
const path = require('path')
let server = http.createServer((req, res) => {
    // res.write('<head><meta charset="utf-8"/></head>');
    const { url } = req;
    if (url === '/' || url === '/index.html') {
        let filePath = path.join(__dirname, 'index.html');
        // 一点要同步
        const content = fs.readFileSync(filePath);
        res.write(content);
    } else if (url === '/image') {
        let filePath = path.join(__dirname, 'banner.jpg');
        // 一点要同步
        const content = fs.readFileSync(filePath);
        res.setHeader('contentype', 'image/jpg')
        res.write(content);
    }
    res.end()
})
server.listen(8080)