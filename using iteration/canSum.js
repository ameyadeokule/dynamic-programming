const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false)
  table[0] = true
  for (let i = 0; i < targetSum; i++) {
    if(table[targetSum] === true) return table[targetSum];
    if( table[i] === true ){
      for (let num of numbers) {
        if ( i+num <= targetSum) table[i+num] = true

      }
    }
  }
  //console.log(table);
  return table[targetSum];
}

console.log(canSum(12,[2,3,4]));
console.log(canSum(9,[2,4]));
console.log(canSum(2000,[2,4]));
