/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let j = 0;
    for(let i = m-1; i < m + n - 1; j++){
        while(j < n - 1 && nums2[j] < nums1[i]){
            
            j++
        }
    }
};