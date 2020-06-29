const http = require('http')

require('./src/practice/main').main()

const server = http.createServer((req, res) => {

})

server.listen(8080)
