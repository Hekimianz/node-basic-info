// ******************* WITHOUT EXPRESS *******************

// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// http
//   .createServer((req, res) => {
//     const pathname = url.parse(req.url, true).pathname;
//     const filePath =
//       pathname === "/" ? "index.html" : `${pathname.substring(1)}.html`;
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         fs.readFile("404.html", (err, data) => {
//           if (err) {
//             res.writeHead(500, { "content-type": "text/html" });
//             res.write("<h1>Internal Server Error</h1>");
//             res.end();
//           }
//           res.writeHead(404, { "content-type": "text/html" });
//           res.write(data);
//           res.end();
//         });
//       } else {
//         res.writeHead(200, { "content-type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//   })
//   .listen(8080);

// ******************* WITH EXPRESS *******************
require("dotenv").config();
const express = require("express");
const { dirname } = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.status(200).sendFile(__dirname + "/about.html");
});

app.get("/contact", (req, res) => {
  res.status(200).sendFile(__dirname + "/contact-me.html");
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/404.html");
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
