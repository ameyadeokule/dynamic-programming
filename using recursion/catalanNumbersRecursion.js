function catalan(n){

    // Base case
    if (n <= 1)
        return 1;

    // catalan(n) is sum of
    // catalan(i)*catalan(n-i-1)
    let res = 0;
    for(let i = 0; i < n; i++)
        res += catalan(i) *
                catalan(n - i - 1);

    return res;
}
console.log(catalan(9));
console.log(catalan(15));
