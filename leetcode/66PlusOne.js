import { assertDeepEquals, assertEquals } from "./testModule.js";

var plusOne = function(digits){
    let sum = 0;
    for(let i = digits.length -1 ; i >= 0; i--){
        sum = digits[i] + 1;
        if(sum == 10){
            digits[i] = 0;
        } else {
            digits[i] = sum;
            return digits;
        }
    }
    digits.splice(0, 0, 1);
    return digits; 
}
assertDeepEquals(plusOne([1,2,3]), [1,2,4])

assertDeepEquals(plusOne([9,9,9,9]), [1,0,0,0,0])