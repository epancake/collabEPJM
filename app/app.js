var coconuts = [1, 4, 6, 8, 4, 9];

function returnEvens(array) {
  var evenCoconuts = 1;
  for (var i = 0; i < array.length; i++) {
    evenCoconuts = evenCoconuts * array[i]
  } return evenCoconuts;
} 

returnEvens(coconuts)
