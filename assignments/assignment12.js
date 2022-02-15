var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245
  }
];

// Method without array.sort()
/*
function sortObjectArray(array, property) {
  let tempobject = {};
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++)
      if (array[i][property] > array[j][property]) {
        tempobject = array[j];
        array[j] = array[i];
        array[i] = tempobject;
      }
  }
}
*/

// method with array.sort()
function sortObjectArray(array, property) {
  array.sort((first, second) => {
    if (first[property] < second[property]) {
      return -1;
    } else if (first[property] > second[property]) {
      return 1;
    } else {
      return 0;
    }
  });
}

// library.sort(); won't actually sort the objects at all as it
// doesn't know what to compare

sortObjectArray(library, "title");
console.log(library);
sortObjectArray(library, "author");
console.log(library);
sortObjectArray(library, "libraryID");
console.log(library);
