const canConstruct = (target, wordbank, memo={}) =>{
  if(target in memo) return memo[target]
  if(target === '') return true

  for (let word of wordbank) {
    if(target.indexOf(word) === 0){
      const suffix = target.slice(word.length)

      if(canConstruct(suffix, wordbank, memo) === true){
        memo[target] = true
        return true
      }
    }
  }
  memo[target] = false
  return false
}

console.log(canConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['ee','e','eeeee','eee','eeeeee']));
