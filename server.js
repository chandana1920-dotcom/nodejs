const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
        res.end("hello world");
    }
    else if (req.url === "/contact") {
        res.end("Contact page")
    }
    else if (req.url === "/about") {
        res.end("About page")
    }
    else{
        res.end("Page not found");
    }
});
server.listen(3001, () => {
    console.log("Server is listening on port 3001");
});