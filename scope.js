// let a = 6;
// console.log(a);

// const firstFunction = () => {
//   a = 7;
//   console.log(a);
//   const secondFunction = () => {
//     a = 8;
//     let b = 9;
//     console.log(a);
//   };
//   secondFunction();
// };
// firstFunction();
// console.log(a);

//console logging an invoked function ((), it logs the result of the function), v its reference, which shows the function syntax
let add = () => {
  return 2 + 3;
};
console.log(add);
console.log(add());

//simple function that takes timeOfDay argument
let whichGreeting = (timeOfDay) => {
  console.log(`Good ${timeOfDay}`);
};

//greet function takes arguments of time, and other function, determines time of
//..day by number
let greet = (time, fn) => {
  if (time < 12) {
    fn("Morning");
  } else if (time > 12 && time < 18) {
    fn("Afternoon");
  } else {
    fn("Evening");
  }
};

//call greet() and pass it a time, and a reference of  timeofDay as a function
greet(14, whichGreeting);

let myFunction = () => {
  return () => {
    console.log("hello");
  };
};
console.log(myFunction());
