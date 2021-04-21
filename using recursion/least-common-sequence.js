/*
 *   USING RECURSION
 */
function LCS(S1, m, S2, n) {
	var finalResult

	//define base case. if the length of either strings are zero,
	//then no need to continue return 0
	if (m === 0 || n === 0) {
		finalResult = 0
	} else if (S1[m - 1] === S2[n - 1]) {
		//if the last characters are the same
		finalResult = 1 + LCS(S1, m - 1, S2, n - 1)
	} else {
		var excludeLastOfS1 = LCS(S1, m - 1, S2, n),
			excludeLastOfS2 = LCS(S1, m, S2, n - 1)

		finalResult = Math.max(excludeLastOfS1, excludeLastOfS2)
	}
	//return the final result
	return finalResult
}

var string_one = 'ABACBDAB', //BATD
	string_one_length = string_one.length,
	string_two = 'BDCADB', //ABACD
	string_two_length = string_two.length,
	lcs = LCS(string_one, string_one_length, string_two, string_two_length)

console.log('Longest Comment Subsequence is: ', lcs)

/*
 *   USING DYNAMIC PROGRAMMING:
 */

//Initial 2D dynamic array to a size of the small string
var dpArr = []
var size
string_one_length <= string_two_length
	? (size = string_one_length)
	: (size = string_two_length)

for (var i = 0; i < size; i++) {
	dpArr.push([])
}

function LCS_DP(S1, m, S2, n) {
	var finalResult
	//check to see if the result is already stored in the array. if it is return that instead
	if (dpArr[m][n] !== undefined) {
		return dpArr[m][n]
	}
	//define base case. if the length of either strings are zero,
	//then no need to continue return 0
	if (m === 0 || n === 0) {
		finalResult = 0
	} else if (S1[m - 1] === S2[n - 1]) {
		//if the last characters are the same
		finalResult = 1 + LCS_DP(S1, m - 1, S2, n - 1)
	} else {
		var excludeLastOfS1 = LCS_DP(S1, m - 1, S2, n),
			excludeLastOfS2 = LCS_DP(S1, m, S2, n - 1)

		finalResult = Math.max(excludeLastOfS1, excludeLastOfS2)
	}
	dpArr[m][n] = finalResult
	//return the final result
	return finalResult
}

console.log('LCS Dynamic Programming is: ', lcs)
