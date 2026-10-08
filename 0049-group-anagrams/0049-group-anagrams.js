/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groups = {};

    for (let word of strs) {
        let key = word.split("").sort().join("");

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(word);
    }

    return Object.values(groups);    
};