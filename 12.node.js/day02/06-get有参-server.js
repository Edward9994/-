//有参数的get请求接口

// 1.获取请求地址url
// 2.判断请求地址，请求类型是否正确
// 3.根据请求地址，读取本地数据
// 响应数据
const http = require('http');
const fs = require('fs');
const path = require('path')
const qs = require('querystring')
const server = http.createServer((req, res) => {
    // 1.获取请求地址url
    // console.log(req.url);
    let [url, name] = req.url.split('?');
    let qsObj = qs.parse(name);
    // console.log(url, method);
    // 2.判断请求地址，请求类型是否正确
    if (url === '/getlist' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'data.json');
        // 3.根据请求地址，读取本地数据
        const content = fs.readFileSync(filePath, 'utf-8');
        // 本地json数据转为对象
        const arr = JSON.parse(content);
        // console.log(obj1);
        let newName = arr.find(item => {
            if (item.name === qsObj.name) {
                return true
            } else {
                return false
            }
        })
        res.setHeader('content-type', 'application/json;charset=utf8')
        newName = JSON.stringify(newName);
        // console.log(newName);
        res.write(newName);

    } else {
        res.end('404')
    }

    // res.end();
})
server.listen(8080)