function isUnique(value, array) {
  let unique = true;
  for (let element of array) {
    if (element === value) {
      unique = false;
    }
  }
  return unique;
}

function merge_array(first, second) {
  let new_array = [];
  for (let element of first) {
    if (isUnique(element, new_array) && isUnique(element, second)) {
      new_array.push(element);
    }
  }
  const elementsFirst = new_array.length - 1;
  for (let element of second) {
    if (isUnique(element, new_array.slice(elementsFirst))) {
      new_array.push(element);
    }
  }
  return new_array;
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
