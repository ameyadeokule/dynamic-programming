function binomialCoeff(n, k, memo = {}) {
	// Base Cases
	const key = n + ',' + k

	if (key in memo) return memo[key]
	if (k > n) return 0
	if (k == 0 || k == n) return 1

	// Recur
	memo[key] =
		binomialCoeff(n - 1, k - 1, memo) + binomialCoeff(n - 1, k, memo)
	return memo[key]
}

console.log(binomialCoeff(51, 12))
console.log(binomialCoeff(61, 42))
