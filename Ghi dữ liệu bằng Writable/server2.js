var file = require("fs");
var docluong = file.createReadStream(__dirname + "/readme.txt");
docluong.on("data", function (chunk) {
  console.log("Doc luong nao: ");
  console.log(chunk);
});
