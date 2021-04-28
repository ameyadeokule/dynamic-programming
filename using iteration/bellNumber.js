function bellNumber(n) {

        let bell = new Array(n+1);
        for(let i = 0; i < n + 1; i++)
        {
            bell[i] = new Array(n + 1);
        }
        bell[0][0] = 1;

        for (let i=1; i<=n; i++)
        {
            // Explicitly fill for j = 0
            bell[i][0] = bell[i-1][i-1];

            // Fill for remaining values of j
            for (let j=1; j<=i; j++)
                bell[i][j] = bell[i-1][j-1] + bell[i][j-1];
        }

        return bell[n][0];
    }

console.log(bellNumber(12));
