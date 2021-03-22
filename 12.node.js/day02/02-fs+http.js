const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    fs.readFile(`www${req.url}`, (err, buffer) => {
        if (err) {
            res.write('not found')
            res.end()
        } else {
            res.write(buffer)
            res.end()
        }
    })
})
server.listen(8080)