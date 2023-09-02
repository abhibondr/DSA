// Write a function for alphabetical order

function AlphaStr(name) {
  return name.split("").sort().join("");
}

console.log(AlphaStr("AbhishekBondre"));
console.log(AlphaStr("frontendDeveloper"));

//Output- ABbdeehhiknors

// Write a function to capitalize first word of strings

function capitalize(string) {
  var CapiWord = string.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });

  return CapiWord.join(" ");
}

console.log(capitalize("abhishek bro how are you?"));
console.log(capitalize("Coders how are you?"));

//Output: Abhishek Bro How Are You?
