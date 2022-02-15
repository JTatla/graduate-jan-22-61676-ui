function makeMultiple(x) {
  return function(y) {
    return x * y;
  };
}

var mult5 = makeMultiple(5);
var mult10 = makeMultiple(10);

console.log(mult5(7));
console.log(mult10(3));
