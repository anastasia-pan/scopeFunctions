//write a simple function that writes Hello Code nation and repeats
//..it with another function within it.

//running internal function through a loop
const repeatF = () => {
  const Hello = () => {
    console.log("Hello Code Nation!");
  };
  for (i = 0; i < 5; i++) {
    Hello();
  }
};
repeatF();

//using Hello as a parameter
const Hello2 = () => {
  console.log("Hello Code Nation");
};
const writeOut = (fn) => {
  for (i = 0; i < 5; i++) {
    fn();
  }
};
writeOut(Hello2);
