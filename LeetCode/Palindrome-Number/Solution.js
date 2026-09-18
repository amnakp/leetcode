1/**
2 * @param {number} x
3 * @return {boolean}
4 */
5var isPalindrome = function(x) { 
6    let str=x.toString();
7    let result=str.split("").reverse().join("");
8    if(str===result){
9        return true
10    }else{
11        return false
12    }
13    
14};