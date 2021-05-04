const dealnnoyNumber = (m, n, memo = {}) => {
	const key = m + ',' + n
	if (key in memo) return memo[key]

	// Base case
	if (m == 0 || n == 0) return 1

	// Recursive step.
	memo[key] =
		dealnnoyNumber(m - 1, n, memo) +
		dealnnoyNumber(m - 1, n - 1, memo) +
		dealnnoyNumber(m, n - 1, memo)

	return memo[key]
}

console.log(dealnnoyNumber(3, 4))
