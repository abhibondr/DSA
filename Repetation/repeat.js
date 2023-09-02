// check repetation of words in strings

function Occ(str) {
  let occurence = {};

  str.split("").forEach((ele) => {
    if (!occurence.hasOwnProperty(ele)) {
      occurence[ele] = 1;
    } else {
      occurence[ele]++;
    }
  });

  return occurence;
}

console.log(Occ("apple"));

//Output: { a: 1, p: 2, l: 1, e: 1 }
