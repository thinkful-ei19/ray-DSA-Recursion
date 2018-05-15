// Recursive Solution
function arrayDouble(array) {
    if(array.length === 0) {
      return [];
    }
  
    const doubleElement = array[0] * 2;
    return [doubleElement, ...arrayDouble(array.slice(1))];
  
  };
  
  console.log(arrayDouble([1, 3, 5]));


  // Iterative Solution
  function double_all(arr) {
    var ret = Array(arr.length);
    for (var i = 0; i < arr.length; ++i) {
        ret[i] = arr[i] * 2;
    }
    return ret;
}
let arr = [10,4,5,2,1];
console.log(double_all(arr));