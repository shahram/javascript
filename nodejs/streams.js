const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    fs.readFile(__dirname + '/items.csv', (err, items) => {
        res.end(items);
    })
})

server.listen(3000);