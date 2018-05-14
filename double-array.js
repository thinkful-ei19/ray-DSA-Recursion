// Array Double
function arrayDouble(array) {
    if(array.length === 0) {
      return [];
    }
  
    const doubleElement = array[0] * 2;
    return [doubleElement, ...arrayDouble(array.slice(1))];
  
  };
  
  console.log(arrayDouble([1, 3, 5]));