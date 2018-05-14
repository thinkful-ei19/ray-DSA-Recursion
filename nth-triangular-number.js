function triangleNum(num) {
  if(num === 0) {
    return 0;
  }
  return num + triangleNum(num - 1);
};

console.log(triangleNum(5));