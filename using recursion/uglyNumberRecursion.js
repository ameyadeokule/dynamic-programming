function maxDivide(a , b) {
    while (a % b == 0)
        a = a / b;
    return a;
}

/*
 * Function to check if a number is ugly or not
 */
function isUgly(no) {
    no = maxDivide(no, 2);
    no = maxDivide(no, 3);
    no = maxDivide(no, 5);

    return (no == 1) ? 1 : 0;
}

/*
 * Function to get the nth ugly number
 */
function getNthUglyNo(n)
{
    var i = 1;

    // ugly number count
    var count = 1;

    // check for all integers
    // until count becomes n
    while (n > count)
    {
        i++;
        if (isUgly(i) == 1)
            count++;
    }
    return i;
}

console.log(getNthUglyNo(150));
console.log(getNthUglyNo(15));
