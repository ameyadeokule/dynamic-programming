const dealnnoyNumber = (m, n) => {
	const table = Array(m + 1)
		.fill()
		.map(() => Array(n + 1).fill(0))

	for (let i = 0; i <= m; i++) {
		table[i][0] = 1
	}

	for (let i = 0; i <= n; i++) {
		table[0][i] = 1
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			table[i][j] =
				table[i - 1][j] + table[i - 1][j - 1] + table[i][j - 1]
		}
	}

	return table[m][n]
}

console.log(dealnnoyNumber(4, 3))
