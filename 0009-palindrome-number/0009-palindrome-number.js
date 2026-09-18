/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) { 
    let str=x.toString();
    let result=str.split("").reverse().join("");
    if(str===result){
        return true
    }else{
        return false
    }
    
};