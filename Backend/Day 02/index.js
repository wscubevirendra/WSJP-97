const http = require("http");
const url = require("url");
const fs = require("fs");



const server = http.createServer(
    (req, res) => {
        const urlParser = url.parse(req.url, true);
        if (urlParser.pathname === "/") {
            const data = fs.readFileSync("index.html", "utf-8");
            res.end(data)

        } else if (urlParser.pathname === "/about") {
            const data = fs.readFileSync("about.html", "utf-8");
            res.end(data)

        }else{
            res.end("404")
        }
    }
)


server.listen(
    5000,
    () => {
        console.log("Server started")
    }
)