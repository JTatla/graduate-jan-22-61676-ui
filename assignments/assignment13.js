// Basic promise resolve and reject
const simplePromise = new Promise((resolve, reject) => {
  let flag = true;
  // let flag = false;
  if (flag) {
    resolve("True");
  } else {
    reject("False");
  }
});

simplePromise
  .then(message => {
    console.log("Flag is " + message + " - resolved");
  })
  .catch(message => {
    console.log("Flag is " + message + " - rejected");
  });

// promise functions
function promiseFunction() {
  let x = 5;
  let y = 6;
  // let y = 4;
  return new Promise((resolve, reject) => {
    if (y > x) {
      resolve(`y = ${y} resolved`);
    } else {
      reject(`y = ${y} rejected`);
    }
  });
}

promiseFunction()
  .then(message => {
    console.log("y is more than x - " + message);
  })
  .catch(message => {
    console.log("y is less than x - " + message);
  });

// promises - race vs all
const promise1 = new Promise((resolve, reject) => {
  var a = setTimeout(resolve, 5000, "I hate you!");
});

const promise2 = new Promise((resolve, reject) => {
  var b = setTimeout(resolve, 3000, "I love you!");
  // clearTimeout(b);
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value);
});

Promise.all([promise1, promise2]).then(values => {
  console.log(values);
});

// Can chain then conditions
const myPromise = new Promise((resolve, reject) => {
  var a = setTimeout(() => {
    resolve(10);
  }, 2000);
  // clearTimeout(a);
});

myPromise
  .then(value => {
    return value * 3;
  })
  .then(value => {
    return value + 5;
  })
  .then(value => {
    return value * 4;
  })
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err);
  });
