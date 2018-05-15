// Recursive Solution
function factorial(num) {
  if(num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(8));


// Iterative Solution
function factorialIterative(number){
  let fact = 1;
  for (let i = 1; i <= number; i++){
      fact *= i;
  }
  return fact;
}
console.log(factorialIterative(5));