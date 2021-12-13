// declare an array with five elements
// use function Map to iterate through the array and multiply by 3 using function.

const myArray = [1, 2, 3, 4, 5];
const multiply = (num) => {
  return num * 3;
};
const mappedArray = myArray.map(multiply);
console.log(mappedArray);
