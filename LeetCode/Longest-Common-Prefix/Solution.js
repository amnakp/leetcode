1/**
2 * @param {string[]} strs
3 * @return {string}
4 */
5var longestCommonPrefix = function(strs) {
6    let prefix = strs[0];
7
8    for (let i = 1; i < strs.length; i++) {
9        while (!strs[i].startsWith(prefix)) {
10            prefix = prefix.slice(0, -1);
11        }
12    }
13
14    return prefix;    
15};