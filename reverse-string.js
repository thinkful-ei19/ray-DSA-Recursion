// Recursive Solution
function reverseString(str) {
  if(str.length === 0) {
      return '';
  }
  return str[str.length - 1] + reverseString(str.slice(0, -1));
};

console.log(reverseString('Hello'));


// Iterative Solution
function reverse_tail(str) {
  var accumulator = "";
  while (str !== "") {
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator;
}