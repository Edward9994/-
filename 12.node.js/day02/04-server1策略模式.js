const http = require('http')
const fs = require('fs')
const path = require('path')
const mapExtToContentType = {
    '.html': 'text/html',
    '.ico': 'image/ico',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.jpg': 'image/jpg',
}
let server = http.createServer((req, res) => {

    fs.readFile(`html${req.url}`, (err, buffer) => {
        const ext = path.extname(req.url);
        mapExtToContentType[ext] && res.setHeader('content-type', mapExtToContentType[ext]);
        console.log(ext);
        res.end(buffer)
    }
    )
})
server.listen(8080)

// const url = path.extname(req.url);
// const filePath = path.join(__dirname, 'html', url);
// fs.readFile(`html${req.url}`, (err, buffer) => {
//     const ext = path.extname(req.url);
//     mapExtToContentType[ext] && res.setHeader('content-type', mapExtToContentType[ext]);
//     console.log(ext);
//     res.end(buffer)
// }
// )