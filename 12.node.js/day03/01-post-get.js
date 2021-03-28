//有参数的get请求接口

// 1.获取请求地址url
// 2.判断请求地址，请求类型是否正确
// 3.根据请求地址，读取本地数据
// 响应数据
const http = require('http');
const fs = require('fs');
const path = require('path')
const qs = require('querystring');
const server = http.createServer((req, res) => {
    // 1.获取请求地址url
    // console.log(req.url);
    let [url, name] = req.url.split('?');
    let qsObj = qs.parse(name);
    const filePath = path.join(__dirname, 'data.json');
    // console.log(url, method);
    // 2.判断请求地址，请求类型是否正确
    if (url === '/getlist' && req.method === 'GET') {

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

    } else if (url === '/add' && req.method === 'POST') {
        let result = ''
        // 事件监听
        // 1.接收传入的数据
        req.on('data', chunk => result += chunk)
        req.on('end', () => {
            // 1.1解析为对象的数据
            const qsObj = qs.parse(result)
            // 2.获取本地数据
            const content = fs.readFileSync(filePath, 'utf8');
            // 2.1解析json数据
            let arr = JSON.parse(content)
            // // 3.数组对象.push一个对象进去
            arr.push({ name: qsObj.name })
            // // 3.1转为json
            arr = JSON.stringify(arr)
            // 3.2写入本地数据
            fs.writeFileSync(filePath, arr);
        })
        res.write('新增数据成功')
    }
    else {
        res.write('404')
    }

    res.end();
})
server.listen(8080)