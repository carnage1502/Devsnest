// fs module to implement CRUD using Async.
const fs = require("fs");

fs.mkdir("day_6", (err) => {
    console.log("Created folder");
});

fs.writeFile("./day_6/hemllo.txt","Carnage Bhaimya",(err) => {
    console.log("Created File");
})

fs.appendFile("./day_6/hemllo.txt"," is the bemst!!",(err) =>{
    console.log("Appended");
})

fs.readFile("./day_6/hemllo.txt","utf-8",(err,data) => {
    console.log(data);
})

fs.rename("./day_6/hemllo.txt","./day_6/hemllo1.txt",(err) => {
    console.log("Renamed");
})

// fs.unlink("./day_6/hemllo1.js", (err) => {
//     console.log("file deleted");
// })

// fs.rmdir("day_6", (err) => {
//     console.log("folder deleted");
// })