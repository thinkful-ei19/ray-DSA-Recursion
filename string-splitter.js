function strSplitter(str, seperator) {
  if(str.indexOf(seperator) <= -1) {
    return [str];
  }
  let index = str.indexOf(seperator);
  let newStr = str.slice(0, index);
  return [newStr, ...strSplitter(str.slice(index + 1), seperator)];
};

console.log(strSplitter('how are you doing today?', ' '));