const path = require("path");

const a = path.basename("C:/Users/HP/Desktop/NodeJS/pathmodule.js");
const b = path.dirname("C:/Users/HP/Desktop/NodeJS/pathmodule.js");
const c = path.extname(__filename);

console.log(a);
console.log(b);
console.log(__filename, c);
