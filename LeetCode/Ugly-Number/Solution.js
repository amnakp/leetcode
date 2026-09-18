1/**
2 * @param {number} n
3 * @return {boolean}
4 */
5var isUgly = function(n) {
6    if (n <= 0) return false;
7
8    while (n % 2 === 0) {
9        n = n / 2;
10    }
11
12    while (n % 3 === 0) {
13        n = n / 3;
14    }
15
16    while (n % 5 === 0) {
17        n = n / 5;
18    }
19
20    return n === 1;
21};