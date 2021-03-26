const wordConstruct = (target, wordBank, memo = {}) => {
  if(target in memo) return memo[target]
  if(target === '') return [[]]

  let totalways = []

  for (let word of wordBank) {
    if(target.indexOf(word) === 0){
      const suffix = target.slice(word.length)
      const suffixWays = wordConstruct(suffix, wordBank, memo)
      const targetWays = suffixWays.map(way => [word, ...way])
      totalways.push(...targetWays)
    }
  }
  memo[target] = totalways
  return totalways;
}

console.log(wordConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(wordConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar']))
console.log(wordConstruct('eeeeeeeeeeez',['e','ee','eee', 'eeee','eeeee','eeeeee']));
