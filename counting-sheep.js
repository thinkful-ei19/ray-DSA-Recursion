// Recursive Solution
function countSheep(from) {
  if(from === 0) {
    return;
  }

  console.log(from + ' Another sheep jump over the fence');
  countSheep(from - 1);
};

countSheep(5);


// Iterative Solution
function countSheepLoop(num){
  for(let i=num; i>0; i--){
      console.log(`counting sheeps ${i}`);
  }
}
countSheepLoop(10);