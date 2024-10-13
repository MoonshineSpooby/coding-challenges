import { assertDeepEquals } from "./testModule.js";

function highAndLow(numbers){
    let low = Number.POSITIVE_INFINITY
    let high = Number.NEGATIVE_INFINITY
    numbers.split(" ").forEach(element => {
        let num = Number(element)
        if(num < low) low = element;
        if(num > high) high = element;
    });
    return `${high} ${low}`    
}
assertDeepEquals(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9")
assertDeepEquals(highAndLow('5 5 5 5'), '5 5')
assertDeepEquals(highAndLow('6 -3'), '6 -3')
assertDeepEquals(highAndLow('1'), '1 1')