function binomialCoeff(n, k) {
	let C = Array(n + 1)
		.fill(0)
		.map((x) => Array(k + 1).fill(0))
	let i, j

	// Calculate  value of Binomial
	// Coefficient in bottom up manner
	for (i = 0; i <= n; i++) {
		for (j = 0; j <= min(i, k); j++) {
			// Base Cases
			if (j == 0 || j == i) C[i][j] = 1
			// Calculate value using
			// previously stored values
			else C[i][j] = C[i - 1][j - 1] + C[i - 1][j]
		}
	}
	return C[n][k]
}

function min(a, b) {
	return a < b ? a : b
}

// Return the Lm, n Lobb Number.
function lobb(n, m) {
	return ((2 * m + 1) * binomialCoeff(2 * n, m + n)) / (m + n + 1)
}

console.log(lobb(5, 3))
