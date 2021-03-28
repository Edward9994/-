const http = require('http');
const fs = require('fs');
const path = require('path')
// 接口的三要素
//类型
//url
//参数


const server = http.createServer((req, res) => {
    // 1.获取请求地址url
    const { url, method } = req;
    // 2.判断请求地址，请求类型是否正确
    if (url === '/getlist' && method === 'GET') {
        // 3.根据请求地址，读取本地数据
        let filePath = path.join(__dirname, 'data.json')
        const content = fs.readFileSync(filePath);
        res.setHeader('content-type', 'application/json')
        // 响应数据
        res.write(content);
    }
    res.end()
})
server.listen(8080, () => {
    console.log('服务器已运行');
})