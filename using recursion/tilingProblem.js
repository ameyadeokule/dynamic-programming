/*Given a “2 x n” board and tiles of size “2 x 1”, count the number of ways
 to tile the given board using the 2 x 1 tiles. A tile can either be placed
 horizontally i.e., as a 1 x 2 tile or vertically i.e., as 2 x 1 tile. */

const getNoOfWays = (n, memo = {}) => {
	if (n in memo) return memo[n]
	if (n == 0) return 0
	if (n == 1) return 1

	memo[n] = getNoOfWays(n - 1, memo) + getNoOfWays(n - 2, memo)
	return memo[n]
}

console.log(getNoOfWays(41))
