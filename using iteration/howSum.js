const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []
  for (let i = 0; i < targetSum; i++) {
    if(table[targetSum] !== null) return table[targetSum];
    if( table[i] !== null ){
      for (let num of numbers) {
        if ( i+num <= targetSum) table[i+num] = [ ...table[i], num]

      }
    }
  }
  //console.log(table);
  return table[targetSum];
}

console.log(howSum(12,[2,3,4]));
console.log(howSum(9,[2,4]));
console.log(howSum(21,[4,3,12]));
