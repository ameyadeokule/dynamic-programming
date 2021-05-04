const countChange = (S, m, n) => {
	let table = new Array(n + 1)
	table.fill(0)

	// Base case (If given value is 0)
	table[0] = 1

	// Pick all coins one by one and
	// update the table[] values after
	// the index greater than or equal
	// to the value of the picked coin
	for (let i = 0; i < m; i++)
		for (let j = S[i]; j <= n; j++) table[j] += table[j - S[i]]

	return table[n]
}

let changeArray = [1, 2, 3]
let m = changeArray.length
let targetSum = 4
console.log(countChange(changeArray, m, targetSum))
