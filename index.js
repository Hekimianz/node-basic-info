const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const pathname = url.parse(req.url, true).pathname;
    const filePath =
      pathname === "/" ? "index.html" : `${pathname.substring(1)}.html`;
    fs.readFile(filePath, (err, data) => {
      if (err) {
        fs.readFile("404.html", (err, data) => {
          if (err) {
            res.writeHead(500, { "content-type": "text/html" });
            res.write("<h1>Internal Server Error</h1>");
            res.end();
          }
          res.writeHead(404, { "content-type": "text/html" });
          res.write(data);
          res.end();
        });
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(8080);
