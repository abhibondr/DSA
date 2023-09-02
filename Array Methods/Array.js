// Methods:-

// To remove and add element at the end of array:- pop & push
// To remove and add element at the front of array:- shift & unshift

// push method -
// let array = [10, 20, 30, 40, 50];
// array.push(60);
// console.log(array); // [10,20,30,40,50,60]

// pop method
// array.pop();
// console.log(array);

//shift method
// array.shift();  to remove to the first element to array
// console.log(array);

// unshift method
array.unshift("abhi"); // to add to the first element to array
console.log(array);

// adding previous value and current values means total sums of array

let arr = [1, 2, 3, 4, 5];

function Sum(array) {
  let sum = 0;
  array.forEach((ele) => {
    sum = sum + ele;
  });
  return sum;
}

console.log(Sum(arr));

//Second Appproach

let array = [1, 2, 3, 4, 5];

function Sum(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(Sum(array));
