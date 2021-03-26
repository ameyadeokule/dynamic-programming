const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []

  for (let i = 0; i < targetSum; i++) {
    if(table[targetSum] !== null) return table[targetSum];
    if( table[i] !== null ){
      for (let num of numbers) {
        if(i+num <= targetSum && ( !table[i + num] || table[i + num].length > table[i].length + 1)){
          table[i + num] = [ ...table[i], num]
        }
      }
    }
  }
  console.log(table);
  return table[targetSum];
}

console.log(bestSum(12,[2,3,4]));
console.log(bestSum(9,[2,4]));
console.log(bestSum(21,[4,3,12]));
