// Recursive Solution
function fibonacci(num) {
  if(num === 0) {
    return 0;
  }
  if(num === 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(5));


// Iterative Solution
function fibonacciIterative(number){
  let num1 = 1;
  let num2 = 0;
  let fib = null;
  while(number > 0){
      fib = num1;
      num1 = num1+num2;
      num2 = fib;
      number--;
  }
  return num2;
}