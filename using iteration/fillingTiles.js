//Given a 3 x n board, find the number of ways to fill it with 2 x 1 dominoes.

const countWays = (n) => {
	const table = Array(n + 1).fill(0)
	const pieces = Array(n + 1).fill(0)

	table[0] = 1
	table[1] = 0

	pieces[0] = 0
	pieces[1] = 1

	for (let i = 2; i <= n; i++) {
		table[i] = table[i - 2] + 2 * pieces[i - 1]
		pieces[i] = table[i - 1] + pieces[i - 2]
	}

	return table[n]
}

console.log(countWays(8))
