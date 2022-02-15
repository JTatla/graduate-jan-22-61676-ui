const str1 = "johnsmith@comapny.com";
const str2 = "john.smith@comapny.com";
const str3 = "jo{}hn$mi#&th@comapny.com";
const str4 = "john..smith@company.com";
const str5 = ".johnsmith@company.com";
const str6 = "johnsmithcompany.com";
const str7 = "johnsmith@company";
const str8 = "johnsmithcompany.";

const regex = new RegExp(
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(\.?[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-])*@\w+(\.?\w+)*(\.\w{2,3})$/
);

console.log(regex.test(str1));
console.log(regex.test(str2));
console.log(regex.test(str3));
console.log(regex.test(str4));
console.log(regex.test(str5));
console.log(regex.test(str6));
console.log(regex.test(str7));
console.log(regex.test(str8));

// intital regex pattern before format on save, used \to escape certain symbols
// turns out it wasn't needed, likely due to being inside []
// /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(\.?[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-])*@\w+(\.?\w+)*(\.\w{2,3})$/
