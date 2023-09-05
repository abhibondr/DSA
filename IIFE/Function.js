// IIFE

// IIFE is generally used when you want to make varible private

var ans = (function () {
  var privateValue = 12;

  return {
    getter: function () {
      console.log(privateValue);
    },
    setter: function (val) {
      privateValue = val;
    },
  };
})();

ans.setter(25);
ans.getter();

// var ans = (function () {
//   var name = "abhi";
//   return {
//     getter: function () {
//       console.log(name);
//     },
//   };
// })();

// ans.getter();
