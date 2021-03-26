const countConstruct = (target, wordbank, memo = {}) => {
  if(target in memo) return memo[target]
  if(target === '') return 1;

  let totalCount = 0
  for (let word of wordbank) {
    if(target.indexOf(word) === 0){
      const suffix = target.slice(word.length)

      const numWaysForRest = countConstruct(suffix, wordbank, memo)
      totalCount += numWaysForRest
    }
  }

  memo[target] = totalCount
  return totalCount
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(countConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar']))
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeee',['e','ee','eee', 'eeee','eeeee','eeeeee']));
