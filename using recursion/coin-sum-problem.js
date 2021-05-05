//The aproach is very similar to sum-of-numbers generated problem.

const makeChange = (targetSum, numbers, length, memo = {}) => {
	if (targetSum in memo) return memo[targetSum]

	if (targetSum === 0) return 1
	if (targetSum < 0) return 0
	if (length <= 0 && targetSum >= 1) return 0

	memo[targetSum] =
		makeChange(targetSum, numbers, length - 1, memo) +
		makeChange(targetSum - numbers[length - 1], numbers, length, memo)

	console.log(memo)
	return memo[targetSum]
}

let coinArray = [2, 3, 5, 6]

console.log(makeChange(10, coinArray, coinArray.length))
