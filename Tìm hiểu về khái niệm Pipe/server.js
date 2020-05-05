var http = require("http");
var file = require("fs");
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "ContentType": "text/plain" });
  var docluong = file.createReadStream(__dirname + "/readme.txt", "utf8");
  docluong.pipe(res);
});
server.listen(8080, "127.0.0.1");
console.log("Server running on port 8080");
