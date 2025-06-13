/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const arr2 = []
    for(let i = 0; i < arr.length; i++){
        arr2[i].push(fn(arr[i]))
    }
    return arr2;

};

const plusOne = function (n){ return n + 1; }
let array = [1,2,3]
console.log(map(array, plusOne))