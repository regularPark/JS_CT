const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const time = input[0].split(" ").map(Number);

const hour = parseInt(time[0]);
const minute = parseInt(time[1]);
const cookingTime = parseInt(input[1]);

const cookedHour = hour + parseInt((minute + cookingTime) / 60);
const cookedMin = (minute + cookingTime) % 60;

console.log(cookedHour >= 24 ? cookedHour - 24 : cookedHour, cookedMin);
