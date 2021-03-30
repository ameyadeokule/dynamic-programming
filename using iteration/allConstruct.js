const allConstruct =(target, wordbank) =>{
  const table = Array(target.length + 1).fill().map(() => [])
  table[0] = [[]]

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordbank) {
      if(target.slice(i, i + word.length) === word){
        const newCombinations = table[i].map(subarray => [...subarray, word])
        table[i+word.length].push(...newCombinations)
      }
    }
  }
  return table[target.length]
}
console.log(allConstruct('purple',['purp','p','ur','le','purpl']));
console.log(allConstruct('abcdef',['ab','abc','cd','def','abcd']))
console.log(allConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar']))
