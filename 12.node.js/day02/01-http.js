const http = require('http');
const server = http.createServer((req, res) => {

    res.write('<head><meta charset="utf-8"/></head>');
    res.end('豆腐干地方')
    console.log('asdgsd');
})
server.listen(8080)