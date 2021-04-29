function permutationCoeff(n, k) {
	if (k > n) return 0

	let fact = new Array(n + 1)

	// base case
	fact[0] = 1

	// Calculate value
	// factorials up to n
	for (let i = 1; i <= n; i++) fact[i] = i * fact[i - 1]

	// P(n,k) = n! / (n - k)!
	return parseInt(fact[n] / fact[n - k], 10)
}

console.log(permutationCoeff(5, 4))
