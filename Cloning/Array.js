let array = [1, 2, 3];

// function CloneArr(arr) {
//   return [...arr];
// } // first Way

// function CloneArr(arr) {
//   let newArr = [];

//   arr.forEach((ele) => {
//     newArr.push(ele);
//   });

//   return newArr;
// } // second way

function CloneArr(arr) {
  return arr.map(function (e) {
    return e;
  });
} // Third way

let newarr = CloneArr(array);
newarr.pop();
console.log(newarr);
