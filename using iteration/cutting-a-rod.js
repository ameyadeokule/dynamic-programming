/*Given a rod of length n inches and an array of prices that contains prices of all pieces of size smaller than n.
 Determine the maximum value obtainable by cutting up the rod and selling the pieces */

const cutRod = (price, n) => {
	let val = new Array(n + 1)
	val[0] = 0

	// Build the table val[] in
	// bottom up manner and return
	// the last entry from the table
	for (let i = 1; i <= n; i++) {
		let max_val = Number.MIN_VALUE
		for (let j = 0; j < i; j++)
			max_val = Math.max(max_val, price[j] + val[i - j - 1])
		val[i] = max_val
	}

	return val[n]
}

let prices = [1, 5, 8, 9, 10, 17, 17, 20]

console.log(cutRod(prices, prices.length))
