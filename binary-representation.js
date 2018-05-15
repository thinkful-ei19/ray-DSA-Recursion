// Recursive Solution
function binaryRep(num) {
  if(num === 0) {
    return 0;
  }
  let numDivided = Math.floor(num / 2);
  let remainder = num % 2;
  if(numDivided === 0) {
    return `${remainder}`;
  }
  return binaryRep(numDivided) + remainder;
};

console.log(binaryRep(8));


// Iterative Solution
function convertToBinaryIter(num){
  var binary = '';
  while(num>0){
      let rem = Math.floor(num%2);
      binary = rem + binary;
      num = Math.floor(num/2);
  }
  return binary;


}
console.log(convertToBinaryIter(124)); //1111100