var docfile = require("fs");
console.log("Bat dau");
//đọc file
//Sync
// var readFile = docfile.readFileSync("file1.txt", "utf-8");
// console.log("Thuc hien " + readFile);
//Not sync func: nameFile, type, Callback
var readNotFile = docfile.readFile("file.txt", "utf-8", function (err, data) {
  if (true) console.log("dung " + data);
  else return "sai";
});
//ghi vào file
// var writeFile = docfile.writeFileSync("file.txt", readFile);
console.log("Ket thuc");
