/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) return [nums];

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let rest = nums.filter((_, j) => i !== j);

        for (let p of permute(rest)) {
            result.push([nums[i], ...p]);
        }
    }

    return result;
};