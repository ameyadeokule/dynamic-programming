function lcsOf3(X, Y, Z, m, n, o) {
	let L = new Array(m + 1)
	for (let i = 0; i < m + 1; i++) {
		L[i] = new Array(n + 1)
		for (let j = 0; j < n + 1; j++) {
			L[i][j] = new Array(o + 1)
			for (let k = 0; k < o + 1; k++) {
				L[i][j][k] = 0
			}
		}
	}

	/* Following steps build L[m+1][n+1][o+1] in
	   bottom up fashion. Note that L[i][j][k]
	   contains length of LCS of X[0..i-1] and
	   Y[0..j-1]  and Z[0.....k-1]*/
	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			for (let k = 0; k <= o; k++) {
				if (i == 0 || j == 0 || k == 0) L[i][j][k] = 0
				else if (X[i - 1] == Y[j - 1] && X[i - 1] == Z[k - 1])
					L[i][j][k] = L[i - 1][j - 1][k - 1] + 1
				else
					L[i][j][k] = Math.max(
						Math.max(L[i - 1][j][k], L[i][j - 1][k]),
						L[i][j][k - 1],
					)
			}
		}
	}

	/* L[m][n][o] contains length of LCS for
	  X[0..n-1] and Y[0..m-1] and Z[0..o-1]*/
	return L[m][n][o]
}

let X = 'AGGT12'
let Y = '12TXAYB'
let Z = '12XBA'
let m = X.length
let n = Y.length
let o = Z.length

console.log(lcsOf3(X, Y, Z, m, n, o))
