import { assertEquals } from "./testModule";

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    num.split("")
    let data = {
        "high":0,
        "low": 9,
        "hiIndex":0,
        "loIndex":0
    };
    
    for (let index = 0; index < num.length; index++) {
        const element = num[index];
        if(element < data.low) {
            data.low = element;
            data.loIndex = index;
        } 
        if(element >= data.high) {
            data.high = element; 
            data.hiIndex = index
        }
    };
};
assertEquals(maximumSwap(27368), 87362)
assertEquals(maximumSwap(9973), 9973)
assertEquals(maximumSwap(929), 992)
assertEquals(maximumSwap(12227), 72221)