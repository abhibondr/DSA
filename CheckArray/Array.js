// Check If Is this Array or not

function CheckArray(ele) {
  return Array.isArray(ele);
}

console.log(CheckArray([]));
console.log(CheckArray({}));

// How to Empty an array

const array = [1, 2, "abhi", 3, 4, 5];
console.log(array);
array.length = 0;
console.log(array);

// Integer or not

let num = 1.0;

const CheckInteger = (num) => {
  if (num % 1 === 0) {
    return "Interger";
  } else {
    return "!Integer";
  }
};

console.log(CheckInteger(num));

//duplicate an array

let arr = [1, 2, 3, 4, 5];

function duplicateArray(arr) {
  return arr.concat(arr);
}

console.log(duplicateArray(arr));

// reverse No

let a = 12345;

function revreseNo(num) {
  return num.toString().split("").reverse().join("");
}
console.log(revreseNo(a));
