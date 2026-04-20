 const fs = require('fs');

fs.mkdir("docs", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Directory created successfully!");
    }
    
});
fs.writeFile("docs/info.txt", "Hello, World!", (err) => {
   if (err) {
       console.log(err);
    } 
   console.log("File created successfully!");
})
fs.readFile("docs/info.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err.message);
    } else{
        console.log(data);
}
    
// })
if (fs.existsSync("docs/info.txt")) {
    fs.unlink("docs/info.txt", (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("File deleted successfully!");
        }
    });

}
//removeDir
if (fs.existsSync("docs")) {
    fs.rmdir("docs", (err) => {
        if (err) {
            console.log(err.message);
        } else {            console.log("Directory deleted successfully!");
        }
    });
}