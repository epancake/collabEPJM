
var nums = [1, 2, 3, 4, 5];

function multiply(array) {
  var result = 1;
  for (var i = 0; i < array.length; i++) {
    result = result * array[i];
  }
  return result;
}
console.log(multiply(nums));

var students = [
  {
    name: "Clyde",
    age: 100
  },
  {
    name: "Pancake",
    age: 21
  }
];
