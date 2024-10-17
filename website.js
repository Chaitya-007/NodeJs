const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url === "/about") {
    res.end("<h1>This is About Page</h1>");
  } else {
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
