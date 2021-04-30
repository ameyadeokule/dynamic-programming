function largestSubset(a, n) {
	// dp[i] is going to store size of largest
	// divisible subset beginning with a[i].
	let dp = []

	// Since last element is largest, d[n-1] is 1
	dp[n - 1] = 1

	// Fill values for smaller elements.
	for (let i = n - 2; i >= 0; i--) {
		// Find all multiples of a[i] and consider
		// the multiple that has largest subset
		// beginning with it.
		let mxm = 0
		for (let j = i + 1; j < n; j++) {
			if (a[j] % a[i] == 0 || a[i] % a[j] == 0) {
				mxm = Math.max(mxm, dp[j])
			}
		}
		dp[i] = 1 + mxm
	}

	// Return maximum value from dp[]
	return Math.max(...dp)
}

let a = [1, 3, 6, 13, 17, 18]
let n = a.length
console.log(largestSubset(a, n))
