// Recursive Solution
function triangleNum(num) {
  if(num === 0) {
    return 0;
  }
  return num + triangleNum(num - 1);
};

console.log(triangleNum(5));


// Iterative Solution
function triangle(n) {
  var tot = 0;
  for (var i = 1; i <= n; ++i) {
    tot += n;
  }
  return tot;
}