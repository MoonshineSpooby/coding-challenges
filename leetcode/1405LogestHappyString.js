import { assertDeepEquals } from "./testModule.js";

var longestDiverseString = function(a, b, c) {
    let str = ''
    const counts = {
        "a":a,
        "b":b,
        "c":c
    }
    const map1 = {
        "a":0,
        "b":1,
        "c":2,
    }
    const map2 = {
        0:"a",
        1:"b",
        2:"c",
    }
    
    function checkDominant(){
        let remainingLetters = counts.a + counts.b + counts.c;
        if(remainingLetters < 3) return false;
        let peak = false
        for (const letter in map1) {
            let count = counts[letter];            
            if(count >= (remainingLetters / 2)) {
                if(peak) return false;
                peak = letter
            } 
        }
        return peak
    }
    let index = 0;
    while((counts.a && counts.b) || (counts.a && counts.c) 
        || (counts.b && counts.c)){        
        let dominantLetter = checkDominant();  
        if(dominantLetter){
            str += dominantLetter + dominantLetter;
            counts[dominantLetter] -= 2;
            let possNextLetter = map2[(map1[dominantLetter] + index) % 3]
            while(counts[possNextLetter] == 0 || possNextLetter == dominantLetter){
                index++;                 
                possNextLetter = map2[(map1[dominantLetter] + index) % 3]; 
            }           
            str += possNextLetter;
            counts[possNextLetter]--;
            index++
        }
        else {
            let possNextLetter = map2[index % 3]
            const previousLetter = str.charAt(str.length - 1)
            while(counts[possNextLetter] == 0 || possNextLetter == previousLetter){
                index++;
                possNextLetter = map2[index % 3]
            }
            str += possNextLetter;
            counts[possNextLetter]--;
            index++;
        }        
    }
    for (const letter in map1) {
        let count = counts[letter];
        while(count) {            
            let previousTwoLetters = str.charAt(str.length - 1) + str.charAt(str.length - 2);
            if(letter + letter == previousTwoLetters) return str;
            str += letter
            count--
        }        
    }
    return str
};
assertDeepEquals(longestDiverseString(1,3,5), "ccabccbcb")
assertDeepEquals(longestDiverseString(3,3,3), "abcabccba")
assertDeepEquals(longestDiverseString(0,0,3), "cc")
assertDeepEquals(longestDiverseString(10,2,0), "aabaabaa")

