// Counting Sheep
function countSheep(from) {
  if(from === 0) {
    return;
  }

  console.log(from + ' Another sheep jump over the fence');
  countSheep(from - 1);
};

countSheep(5);


// Array Double
function arrayDouble(array) {
  if(array.length === 0) {
    return [];
  }

  const doubleElement = array[0] * 2;
  return [doubleElement, ...arrayDouble(array.slice(1))];

};

console.log(arrayDouble([1, 3, 5]));