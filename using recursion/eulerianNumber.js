/**In combinatorics, the Eulerian Number A(n, m), is the number of permutations of the numbers 1 to n in which
   exactly m elements are greater than previous element. */

const eulerian = (n, m, memo = {}) => {
	const key = n + ',' + m

	if (key in memo) return memo[key]
	if (m >= n || n == 0) return 0
	if (m == 0) return 1

	memo[key] = (n - m) * eulerian(n - 1, m - 1) + (m + 1) * eulerian(n - 1, m)
	return memo[key]
}

console.log(eulerian(10, 1))
