function month_name(x) {
  const month_names = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return month_names[x.getMonth()];
}

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
