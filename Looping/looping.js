//Looping an array

// Methods:-

//For Loop
//For in Loop
//For of Loop
//while loop
//Do While

// let array = [10, 20, 30, 40];

// For Loop

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// While Loop

// let array = ["HTML", "CSS", "SASS", "TYPESCRIPT"];

// let i = 0;

// while (i < array.length) {
//   console.log(array[i]);
//   i++;
// }

//Inbuilt Loop Method

//Map Method
// const numbers = [1, 2, 3, 4, 5, 6];

// const newArray = numbers.map((ele, index, array) => {
//   return ele + 1;
// });

// console.log(newArray); // map method gives you new array

//Filter method

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = arr.filter((ele) => {
//   return ele > 5;
// });

// console.log(newArr);

//Reduce Method

// let arr = [1, 2, 3, 4, 5, 6];

// let newArr = arr.reduce((preItem, currItem) => {
//   return preItem + currItem;
// }, 5);

// // Attention:-
// // 5 is assign to preItem and currItem is now 1 accordingly it goes added in the array

// console.log(newArr);

//Some method

// let arr = [10, 20, 30, 40, 50];

// const result = arr.some((ele) => {
//   return ele > 25;
// });

// console.log(result); //true

//Every Method
let arr = [10, 20, 30, 40, 50];

// const result = arr.every((ele) => {
//   return ele > 25;
// });
// cause every ele is not greater than 25 in the array
// console.log(result); //false

//Find Method
const result = arr.find((ele) => {
  return ele > 20;
});

// gives us first element which greter than 20

console.log(result);
