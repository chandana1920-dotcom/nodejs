const http = require('http'); 

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end("Hello World");
});

server.listen(3001, () => {
    console.log("Server is listening on port 3001");
});