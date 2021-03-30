const countConstruct = (target, wordbank) => {
  const table = Array(target.length + 1).fill(0)
  table[0] = 1

  for (let i = 0; i <= target.length; i++) {
      for (let word of wordbank) {
        if(target.slice(i, i+word.length) === word){
          table[i + word.length] += table[i]
        }
      }
  }
  return table[target.length]
}


console.log(countConstruct('purple',['purp','p','ur','le','purpl']));
console.log(countConstruct('abcdef',['ab','abc','cd','def','abcd']))
