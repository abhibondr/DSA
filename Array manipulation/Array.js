let array = [10, "Abhi", 20, "doing", 30, "coding"];

function FindNumSum(arr) {
  let sum = 0;
  arr.forEach((ele) => {
    if (typeof ele === "number") {
      sum = sum + ele;
    }
  });

  return sum;
}

console.log(FindNumSum(array));
