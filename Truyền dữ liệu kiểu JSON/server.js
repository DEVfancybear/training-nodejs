var http = require("http");
var file = require("fs");
var server = http.createServer(function (req, res) {
  res.writeHead(200, { ContentType: "application/json" });
  var docluong = {
    ten: "Toan",
    nghenghiep: "Coder",
    age: "21",
    que: "Thai binh",
  };
  res.end(JSON.stringify(docluong));
});
server.listen(8282, "127.0.0.1");
console.log("Server running on port 8282");
