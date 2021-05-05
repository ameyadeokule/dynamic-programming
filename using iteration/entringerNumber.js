const entringerNumber = (n, k) => {
	const table = Array(n + 1)
		.fill()
		.map(() => Array(n + 1).fill(0))

	table[0][0] = 1

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= Math.min(i, k); j++)
			table[i][j] = table[i][j - 1] + table[i - 1][i - j]
	}

	return table[n][k]
}

console.log(entringerNumber(4, 2))
