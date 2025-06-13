/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let reduction = init;
    for(let i = 0; i < nums.length; i++){
        reduction = fn(reduction, nums[i])
    }
    return reduction;
};

const sumTest = function sum(accum, curr) { return accum + curr; }
console.log(reduce([1,2,3,4], sumTest, 0))