let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(parseInt(input) - 543);
