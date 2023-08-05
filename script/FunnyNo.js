// function funnyNumber(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (i === 3) return array[i];
//   }
// } 4operation excuted in this

// function funnyNumber(array) {
//   return array[3];
// } // it takes very less time to return the output as compared to top function

// const nums = [120, 150, 452, 354, 450];

// console.time("funnyNo");
// console.log(funnyNumber(nums));
// console.timeEnd("funnyNo");

// Second Example:-

function GoingUpDown(n) {
  console.log("Going Forward!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the End,Going back");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("At the start!");
}

console.log(GoingUpDown(5));
