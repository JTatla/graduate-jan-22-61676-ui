var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
  }
];

// Using for of loop
for (let book of library) {
  console.log(book.readingStatus);
}

// Using forEach programming
library.forEach(value => {
  console.log(value.readingStatus);
});
