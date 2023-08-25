const string = "Om PiGashya Namah🕉";

const newString = (str) => {
  return str.replace(/[a-z]/gi, (char) =>
    char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
  );
};

console.log(newString(string));
