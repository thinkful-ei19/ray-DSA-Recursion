// Counting Sheep
function countSheep(from) {
  if(from === 0) {
    return;
  }

  console.log(from + ' Another sheep jump over the fence');
  countSheep(from - 1);
};

countSheep(5);


