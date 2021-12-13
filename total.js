//write a simple function that concatenates two parameters
//write a higher order function which take a function and two numbers as arguments
//..

//simple concatenation function, two number parameters
const addUp = (num1, num2) => {
  return num1 + num2;
};

//higher order function that takes two numbers, and a function argument
const totalUp = (numb1, numb2, fn) => {
  total = 0;
  for (i = 0; i < 5; i++) {
    total += fn(numb1, numb2);
    console.log(total);
  }
  return console.log(`Τhis is your total: ${total}`);
};

totalUp(1, 2, addUp);
