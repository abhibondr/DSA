//How to flatten the array

//USing default method

let array = [
  [1, 2],
  [3, 4],
  [5, [6, 7], [8, 9, 10]],
];

// const flatArray = array.flat(2);
// console.log(flatArray); //[1,2,3,4,5,6,7,8,9,10]

// const flatArray = [].concat(...array[2]); // [5,6,7,8,9,10]

//Custom made Flattened method

function flatArray(array, flat = 1) {
  let result = [];

  array.forEach((ele) => {
    if (Array.isArray(ele) && flat > 0) {
      result.push(...flatArray(ele, flat - 1));
    } else result.push(ele);
  });
  return result;
}

console.log("customFlat:", flatArray(array, 2)); //[1,2,3,4,5,6,7,8,9,10]
