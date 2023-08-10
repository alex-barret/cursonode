const http = require("http")
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {
    req.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Ola mindo \n Meu Primeiro Script')
})

server.listen(port, host, () => {
    console.log(`Serve running at http://${host}:${port} `)
})