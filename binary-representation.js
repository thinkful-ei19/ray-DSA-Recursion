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