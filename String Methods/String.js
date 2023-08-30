// const string = "Om PiGashya Namah🕉";

// const newString = (str) => {
//   return str.replace(/[a-z]/gi, (char) =>
//     char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
//   );
// };

// console.log(newString(string));

// Problem 2 - reverse first word from a string

var Name = "Abhishek Bondre";

function reverseStr(inputStr) {
  let reverseWord = "";
  let i = inputStr.indexOf(" ");

  // over here we check if there is only one word into the string
  if (i === -1) {
    for (var j = inputStr.length - 1; j >= 0; j--) {
      reverseWord += inputStr[j];
    }
  } else {
    for (var j = i - 1; j >= 0; j--) {
      reverseWord += inputStr[j];
    }
    //if more than one word reverse first word

    for (var j = i; j < inputStr.length; j++) {
      reverseWord += inputStr[j];
    }
    //concat both words
  }

  return reverseWord;
}

console.log(reverseStr(Name));
