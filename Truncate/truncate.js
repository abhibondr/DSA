// Que- 1
// -write a function called truncate that checks the length of a given string

// -if surpasses a specified maximum length,maxlength,it replaces the end of the string

// -with the ellipsis character "..."

// Input: str = "Abhishek trying to do truncate a string";

// output: "Abhishek...";

// solution:-

function truncate(string, maxLength) {
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + "...";
  } else return string;
}

console.log(truncate("Abhishek trying to do truncate a string", 8));

//To run this file go to (cd) truncate folder and write (cmd) - node truncate
