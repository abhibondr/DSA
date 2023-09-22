const Button = document.getElementById("btn");

// Button.addEventListener("click", function (e) {
//   //   console.log("CLicked");
//   if (e.detail == 2) {
//     console.log("Double Click");
//   } else {
//     console.log("Single Click");
//   }
// });

// Concept2
// Fire addEventListener Click event once on button

Button.addEventListener(
  "click",
  () => {
    console.log("Button CLicked");
  },
  { once: true }
);
