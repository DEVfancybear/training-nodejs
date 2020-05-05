var file = require("fs");
var docluong = file.createReadStream(__dirname + "/readme.txt", {
  encoding: "utf8",
});
docluong.on("data", function (chunk) {
  console.log("Doc luong nao: ");
  console.log(chunk);
});
