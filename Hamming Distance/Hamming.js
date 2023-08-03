// Ques3:- Hamming Distance

//Given two string x and y, return the Hamming distance between them.

// Input: x = "Cindrella", y = "Mindrolle"
// output:3

// sol 1:

function hamming(x, y) {
  if (x.length !== y.length) {
    throw new Error("String must have a same length");
  }

  let distance = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }

  return distance;
}

console.log(hamming("Cindrella", "Mindrolle"));

// sol 2: If you want to check hamming distance between their bits

// function hamming(x, y) {
//   x = x.toString(2);
//   y = y.toString(2);

//   if (x.length < y.length) {
//     while (x.length !== y.length) x = "0" + x;
//   } else {
//     while (x.length !== y.length) y = "0" + y;
//   }

//   let distance = 0;

//   for (let i = 0; i < x.length; i++) {
//     if (x[i] !== y[i]) {
//       distance++;
//     }
//   }

//   return distance;
// }

// console.log(hamming(1, 4));
