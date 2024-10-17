const fs = require("fs");

// fs.readFile("file.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// const data = fs.readFileSync("file.txt");
// console.log(data.toString()); // toString() is used to convert buffer data to string

// This will run first if the file is read asynchronously
// console.log("This is a message");

// fs.writeFile("writefile.txt", "this is made using writefile function", () => {
//   console.log("file is written");
// });

const abc = fs.writeFileSync("writefile.txt", "this is data2");
console.log(abc);
console.log("This is a message");
