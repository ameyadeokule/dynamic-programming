// Stock prices on consecutive days
let price = [100, 180, 260, 310, 40, 535, 695]
let n = price.length

/**Stock Buy and Sell with no limits on transactions */

const stockBuySell = (price, n) => {
	// Prices must be given for at least two days
	if (n == 1) return

	// Traverse through given price array
	let i = 0
	while (i < n - 1) {
		// Find Local Minima
		// Note that the limit is (n-2) as we are
		// comparing present element to the next element
		while (i < n - 1 && price[i + 1] <= price[i]) i++

		// If we reached the end, break
		// as no further solution possible
		if (i == n - 1) break

		// Store the index of minima
		let buy = i++

		// Find Local Maxima
		// Note that the limit is (n-1) as we are
		// comparing to previous element
		while (i < n && price[i] >= price[i - 1]) i++

		// Store the index of maxima
		let sell = i - 1

		console.log(`Buy on day: ${buy}  
			Sell on day: ${sell}`)
	}
}

stockBuySell(price, n)

/**Stock Buy and Sell with no limits on transactions */

const maxProfit = (price, n) => {
	// Create profit array and
	// initialize it as 0
	let profit = new Array(n)
	for (let i = 0; i < n; i++) profit[i] = 0

	/* Get the maximum profit with
    only one transaction
    allowed. After this loop,
    profit[i] contains maximum
    profit from price[i..n-1]
    using at most one trans. */
	let max_price = price[n - 1]
	for (let i = n - 2; i >= 0; i--) {
		// max_price has maximum
		// of price[i..n-1]
		if (price[i] > max_price) max_price = price[i]

		// We can get profit[i] by taking maximum of:
		// a) previous maximum, i.e., profit[i+1]
		// b) profit by buying at price[i] and selling at
		// max_price
		profit[i] = Math.max(profit[i + 1], max_price - price[i])
	}

	// Get the maximum profit with
	// two transactions allowed
	// After this loop, profit[n-1]
	// contains the result
	let min_price = price[0]
	for (let i = 1; i < n; i++) {
		// min_price is minimum price
		// in price[0..i]
		if (price[i] < min_price) min_price = price[i]

		// Maximum profit is maximum of:
		// a) previous maximum, i.e., profit[i-1]
		// b) (Buy, Sell) at (min_price, price[i]) and add
		// profit of other trans. stored in profit[i]
		profit[i] = Math.max(profit[i - 1], profit[i] + (price[i] - min_price))
	}
	let result = profit[n - 1]

	return result
}

console.log(maxProfit(price, n))
