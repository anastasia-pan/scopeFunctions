//test the doMath function by passing a number as argument
//and an additional callback function and number within it

const multiply = (a, b) => {
  return a * b;
};
const add = (a, b) => {
  return a + b;
};
const divide = (a, b) => {
  return a / b;
};

const doMath = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};

console.log(doMath(2)(3, add));
