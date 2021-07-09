/* javascript program to find out maximum profit by buying and selling a 
share atmost k times given stock price of n days*/

/**
 * @param {number[], number} prices ,transactions
 * @return {number}
 */
// Time O(nk)
// Space O(n)
function maxProfit(price, n, k) {
	// table to store results of subproblems
	// profit[t][i] stores maximum profit
	// using atmost t transactions up to day
	// i (including day i)
	let profit = Array(k + 1)
		.fill(0)
		.map((x) => Array(n + 1).fill(0))

	// For day 0, you can't earn money
	// irrespective of how many times you trade
	for (let i = 0; i <= k; i++) profit[i][0] = 0

	// profit is 0 if we don't do any
	// transaction (i.e. k =0)
	for (let j = 0; j <= n; j++) profit[0][j] = 0

	// fill the table in bottom-up fashion
	for (let i = 1; i <= k; i++) {
		let prevDiff = -Number.MAX_VALUE
		for (let j = 1; j < n; j++) {
			prevDiff = Math.max(prevDiff, profit[i - 1][j - 1] - price[j - 1])
			profit[i][j] = Math.max(profit[i][j - 1], price[j] + prevDiff)
		}
	}
	return profit[k][n - 1]
}

const k = 3
const price = [12, 14, 17, 10, 14, 13, 12, 15]

const n = price.length

console.log('Maximum profit is: ' + maxProfit(price, n, k))
