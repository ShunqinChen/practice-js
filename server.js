const http = require('http')

const main = require('./src/practice/main')
main.forIn()

const server = http.createServer((req, res) => {

})

server.listen(8080)
