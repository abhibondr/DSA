// Shallow Copy 👇🏻

const arr = [{ name: "abhi" }, { name: "ram" }];

const shallowCopy = [...arr];
shallowCopy[0].name = "virat";

console.log(arr);
