import { assertDeepEquals } from "./testModule.js";

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let haystackPointer;
    for(let i = 0; i <= haystack.length - needle.length; i++){
        haystackPointer = i;
        for(let j = 0; j < needle.length; j++){
            if(needle[j] == haystack[haystackPointer]){
                haystackPointer++;
            } else {
                break;
            }
            if(j == needle.length - 1) return i; 
        }
    }
    return -1;
};
assertDeepEquals(strStr("leetcode", "lee"), 0)
assertDeepEquals(strStr("lootcode", "e"), 7)
assertDeepEquals(strStr("l", "l"), 0)