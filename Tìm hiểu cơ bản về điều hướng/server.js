var http = require("http");
var file = require("fs");
var server = http.createServer(function (req, res) {
  console.log("nguoi dung yeu cau link: " + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { ContentType: "text/html" });
    file.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
  } else if (req.url === "/login") {
    res.writeHead(200, { ContentType: "text/html" });
    file.createReadStream(__dirname + "/login.html", "utf8").pipe(res);
  } else if (req.url === "/register") {
    var register = [
      { name: "Duong1" },
      { age: "21" },
      { username: "ddsafdwf" },
      { password: "11233434" },
    ];
    res.writeHead(200, { ContentType: "aplication/json" });
    res.end(JSON.stringify(register));
  } else if (req.url === "/404.html") {
    res.writeHead(200, { ContentType: "text/html" });
    file.createReadStream(__dirname + "/404.html", "utf8").pipe(res);
  }
});
server.listen(8282, "127.0.0.1");
console.log("Server running on port 8282");
