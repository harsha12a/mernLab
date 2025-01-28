const http = require('http')

let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : "application/json"})
    res.write(JSON.stringify({name: "ravi"}))
    res.end()
})

app.listen(3000)