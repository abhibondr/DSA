const array = [1, 2, 3, 2, 4, 5, 6, 7, 8];

// const removeNo = 5;
// const newArr = array.filter((num) => num !== removeNo);
// console.log(newArr);

// if you want to remove multiple array element

const removeEle = [2, 5];

const newArr = array.filter((num) => !removeEle.includes(num));
console.log(newArr);
