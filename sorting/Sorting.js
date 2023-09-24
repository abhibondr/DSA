// Input:-
const data = [10, "A", 20, "B", 30, "D"];

const num = [];
const str = [];

for (let i = 0; i < data.length; i++) {
  if (typeof data[i] === "number") {
    num.push(data[i]);
  } else if (typeof data[i] === "string") {
    str.push(data[i]);
  }
}

console.log("num: ", num);
console.log("str: ", str);
