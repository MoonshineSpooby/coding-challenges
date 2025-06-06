/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let smaller, larger
    if(str1.length < str2.length){
        smaller = str1;
        larger = str2;    
    } else smaller = str2, larger = str1;
    let i = smaller.length -1
    while(i)
    return res
};
//test cases: Result should return the longest substring between str1 and str2
let str1 = "ABCABC", str2 = "ABC"
console.log("ABCABC + ABC" + gcdOfStrings(str1, str2))
str1 = "ABABAB", str2 = "AB"
console.log("ABABAB + AB:" + gcdOfStrings(str1, str2))
str1 = "LEET", str2 = "CODE"
console.log("LEET + CODE:" + gcdOfStrings(str1, str2))
str1 = "ABC", str2 = "DABDADABC"
console.log("ABC + DABDADABC:"+ gcdOfStrings(str1, str2))

str1 = "XXABC", str2 = "DABXXDADABC"
console.log("ABC + DABDADABC:"+ gcdOfStrings(str1, str2))