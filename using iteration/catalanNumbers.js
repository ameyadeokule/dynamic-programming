function catalanDP(n)
{

    // Table to store results of subproblems
    let catalan= [];

    // Initialize first two values in table
    catalan[0] = catalan[1] = 1;

    // Fill entries in catalan[] using recursive formula
    for (let i = 2; i <= n; i++)
    {
        catalan[i] = 0;
        for (let j = 0; j < i; j++)
            catalan[i] += catalan[j] *
                   catalan[i - j - 1];
    }

    // Return last entry
    return catalan[n];
}
console.log(catalanDP(9));
console.log(catalanDP(15));
