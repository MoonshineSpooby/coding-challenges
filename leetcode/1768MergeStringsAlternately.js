/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */



var mergeAlternately = function(word1, word2) {
    let i =0
    let m = word1.length 
    let n = word2.length 
    let res = ""
    while(i < m || i < n){
        if(i < m && i < n){
            res += `${word1.charAt(i)}${word2.charAt(i)}`
        }
        if(i < m && i >= n){
            res += `${word1.charAt(i)}`
        }
        if(i >= m && i < n){
            res += `${word2.charAt(i)}`
        }
        i++
    }
    return res

};
let testSameLengthA = "abc"
let testSameLengthB = "xyz"
let test1LongerA = "abcde"
let test1LongerB = "xyz"
let test2LongerA = "abc"
let test2LongerB = "vwxyz"


console.log("Test same length:" +
    mergeAlternately(testSameLengthA, testSameLengthB))

console.log("test 1 longer than 2:" + 
    mergeAlternately(test1LongerA, test1LongerB)
)
1
console.log("test 2 longer than 1:" + 
    mergeAlternately(test2LongerA, test2LongerB)
)
