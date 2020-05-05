var docfile = require("fs");
//đọc file
var readFile = docfile.readFileSync("file1.txt", "utf-8");
console.log(readFile);
//ghi vào file
var writeFile = docfile.writeFileSync("file.txt", readFile);
