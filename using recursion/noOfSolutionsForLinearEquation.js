function countSol(coeff, start, end, rhs) {
	// Base case
	if (rhs == 0) return 1

	// Initialize count of solutions
	let result = 0

	// One by subtract all smaller or
	// equal coefficiants and recur
	for (let i = start; i <= end; i++)
		if (coeff[i] <= rhs) result += countSol(coeff, i, end, rhs - coeff[i])

	return result
}

let coeff = [2, 2, 5]
let rhs = 4
let n = coeff.length
console.log(countSol(coeff, 0, n - 1, rhs))
