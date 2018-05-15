// Recursive Solution
function strSplitter(str, seperator) {
  if(str.indexOf(seperator) <= -1) {
    return [str];
  }
  let index = str.indexOf(seperator);
  let newStr = str.slice(0, index);
  return [newStr, ...strSplitter(str.slice(index + 1), seperator)];
};

console.log(strSplitter('how are you doing today?', ' '));


// Iterative Solution
function split(str, sep) {
  var ret = [];
  while (true) {
      var idx = str.indexOf(sep);
      if (idx == -1) break;
ret.push(str.slice(0, idx))
str = str.slice(idx + sep.length);
  }
  ret.push(str);
  return ret;
}