// (1) Find()
console.log("Find Function");
// Returns value of first element of array that satisfies testing function
const array1 = [13, 2, 1, 7, 25];

const found = array1.find(element => element < 10);

console.log(found);

// (2) Filter()
console.log("Filter Function");
// Creates a new array with all elements that passes the testing function
const array2 = [13, 2, 1, 7, 25, 5, 43, 2, 63];

const filtered = array2.filter(element => element < 10);

console.log(filtered);

// (3) Map()
console.log("Map Function");
// Creates a new array with all elements having gone through the provided function
const array3 = ["hello", "world", "javascript", "html", "css"];

const mapped = array3.map(element => element.toUpperCase());

console.log(mapped);

// (4) Reduce()
console.log("Reduce Function");
// Applies callback function to inital value (if supplied) and the first element of the array
// and then the result and the next element of the array, and so on, until a single value is reached
const array4 = [1, 2, 3, 4, 5];

const factorial = array4.reduce(
  (previousValue, currentValue) => previousValue * currentValue
);

console.log(factorial);

const totalPlus6 = array4.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  6
);

console.log(totalPlus6);

// (5) Slice()
console.log("Slice Function");
// Returns shallow copy of array from start index to end index (if provided)
// Original array is not modified
const array5 = [1, 2, 3, 4, 5];

new_array = array5.slice(2);

console.log(new_array);

new_array = array5.slice(1, 3);

console.log(new_array);

new_array = array5.slice(1, -1);

console.log(new_array);

console.log(array5);

// (6) Splice()
console.log("Splice Function");
// Changes array at specific index by starting at one element, deleting a specified
// number of elements, and then inserting a specified number of elements
const days = ["Monday", "Tuesday", "Old Day", "New Day", "Thursday"];

days.splice(2, 2);

console.log(days);

days.splice(2, 0, "Wednesday");

console.log(days);

days.splice(4, 0, "Friday", "Satunday");

console.log(days);

days.splice(5, 1, "Saturday", "Sunday");

console.log(days);
