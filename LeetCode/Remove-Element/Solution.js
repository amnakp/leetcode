1/**
2 * @param {number[]} nums
3 * @param {number} val
4 * @return {number}
5 */
6var removeElement = function(nums, val) {
7    let k = 0;
8
9    for (let i = 0; i < nums.length; i++) {
10        if (nums[i] !== val) {
11            nums[k] = nums[i];
12            k++;
13        }
14    }
15
16    return k;
17};