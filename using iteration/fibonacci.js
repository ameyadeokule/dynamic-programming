const fib = (n) => {
  const table = Array(n+1).fill(0)
  table[1] = 1
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table [i]
    !(i+2 > n+1) ? table[i + 2] += table [i] : 'do nothing'
  }
  return table[n];
}

console.log(fib(80));
console.log(fib(100));
