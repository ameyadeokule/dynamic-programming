/*Given a rod of length n inches and an array of prices that contains prices of all pieces of size smaller than n.
 Determine the maximum value obtainable by cutting up the rod and selling the pieces */

const cutRod = (price, n, memo = {}) => {
	if (n in memo) return memo[n]
	if (n <= 0) return 0

	let max_val = Number.MIN_VALUE

	// Recursively cut the rod in
	// different pieces and compare
	// different configurations
	for (let i = 0; i < n; i++)
		max_val = Math.max(max_val, price[i] + cutRod(price, n - i - 1, memo))

	memo[n] = max_val
	return memo[n]
}
let prices = [1, 5, 8, 9, 10, 17, 17, 20]

console.log(cutRod(prices, prices.length))
