function isPalindrome(String, i, j) {
	while (i < j) {
		if (String[i] != String[j]) return false

		i++
		j--
	}
	return true
}

function minPalPartion(String, i, j) {
	if (i >= j || isPalindrome(String, i, j)) return 0

	let ans = Number.MAX_VALUE,
		count

	for (let k = i; k < j; k++) {
		count =
			minPalPartion(String, i, k) + minPalPartion(String, k + 1, j) + 1
		ans = Math.min(ans, count)
	}
	return ans
}

let str = 'ababbbabbababa'
console.log(
	'Minimum cuts for palindrome partition are',
	minPalPartion(str, 0, str.length - 1),
)
