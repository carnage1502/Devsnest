// fs module to implement CRUD.
var fs = require("fs");

fs.mkdirSync("day_5");

fs.writeFileSync("day_5/hemllo.txt","Carnage Bhaimya");

fs.appendFileSync("day_5/hemllo.txt"," is the bemst!!");

console.log(fs.readFileSync("day_5/hemllo.txt","utf-8"));// to read the content..

fs.renameSync("day_5/hemllo.txt","day_5/hemllo1.txt");

// fs.unlinkSync("day_5/hemllo1.txt");//To delete the file

// fs.rmdirSync('day_5');//To delete the folder..