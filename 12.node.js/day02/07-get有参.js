const http = require('http')
const path = require('path')
const fs = require('fs')
const qs = require('querystring')
const server = http.createServer((req, res) => {
    let [url, name] = req.url.split('?');
    if (url === '/getlist' && req.method === 'GET') {
        const qsObj = qs.parse(name);
        const filePath = path.join(__dirname, "data.json")
        const content = fs.readFileSync(filePath, 'utf8')
        console.log(content);
        const arr = JSON.parse(content)
        const rs = arr.find(item => item.name === qsObj)
        const result = JSON.stringify(rs)
        console.log('找到的结果是', result)
        res.end(result)
    } else {
        res.end('404')
    }
    res.end();
})
server.listen(8080, function () {
    console.log('服务器正在运行');
});
