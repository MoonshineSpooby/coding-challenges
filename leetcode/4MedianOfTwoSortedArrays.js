/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const maxLen = nums1.length + nums2.length;
    if(maxLen == 0) return 0;
    if(maxLen == 1){
        if(nums1.length) return nums1[0];
        else return nums2[0];
    }
    let targetIndex;
    let odd = false;
    
    if(maxLen%2 == 1) {
        targetIndex = (maxLen / 2) + 0.5;
        odd = true;
    } else targetIndex = (maxLen / 2) - 1; // first index, add a[index+1] then div 2 for median

    if(nums1.length == 0){
        if(odd) return nums2[targetIndex - 1]
        else return (nums2[targetIndex] + nums2[targetIndex + 1]) / 2
    }
    if(nums2.length == 0){
        if(odd) return nums1[targetIndex - 1]
        else return (nums1[targetIndex] + nums1[targetIndex + 1]) / 2
    }

    let i = 0, p1 = 0, p2 = 0;
    let num1Last = false;
    //each iteration updates either p1 or p2
    while (i < targetIndex){
        if(nums1[p1] < nums2[p2]) p1++, num1Last = true;
        else p2++, num1Last = false;
        i++
    }

    if(odd){
        if(num1Last) return nums1[p1 - 1]
        else return nums2[p2 - 1]
    } else { // Even len, median = previous number + next number / 2 
        let prevNum, nextNum;

        if(num1Last) prevNum = nums1[p1], p1++;
        else prevNum = nums2[p2], p2++;

        if(nums1[p1] == null){
            nextNum = nums2[p2];
            return (prevNum + nextNum) / 2;
        } 
        if(nums2[p2] == null){
            nextNum = nums1[p1];
            return (prevNum + nextNum) / 2;
        }
        if(nums1[p1] >= nums2[p2]) nextNum = nums1[p1];
        else nextNum = nums2[p2];            
        return (prevNum + nextNum) / 2
    }
};

console.log(findMedianSortedArrays(
    [], [1,2]
))
console.log(findMedianSortedArrays(
    [], [1,2,3]
))
console.log(findMedianSortedArrays(
    [1,3], [2,4]
))
console.log(findMedianSortedArrays(
    [0,0], [0,0]
))
console.log(findMedianSortedArrays(
    [[0,0,0,0,0]], [-1,0,0,0,0,0,1]
))