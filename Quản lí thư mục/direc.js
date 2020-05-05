var file = require("fs");
//remove file  by unlink()

// file.unlink("testwrite.txt");

//create folder
// file.mkdirSync('foldertest')
//remove folder
// file.rmdirSync('foldertest')
file.mkdir('public', function() {
    file.readFile("file.txt", 'utf8', function(err,data) {
        file.writeFileSync("./public/result.txt", data)
    })
})
