var string = "Abhishek is Typing on the Keyboard";

const revStr = string.split(" ").map((word) => {
  return word.split("").reverse().join("");
});

console.log(revStr.join(" "));

//Output: kehsihbA si gnipyT no eht draobyeK
