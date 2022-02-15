function is_weekend(x) {
  let date = new Date(x);
  if (date.getDay() == 0 || date.getDay() == 6) {
    return "weekend";
  }
}

console.log(is_weekend("Nov 15, 2014"));
console.log(is_weekend("Nov 16, 2014"));
console.log(is_weekend("Nov 17, 2014"));
