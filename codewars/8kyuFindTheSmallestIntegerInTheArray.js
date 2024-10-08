import { assertDeepEquals } from "./testModule.js";

function findSmallestInt(arr) {
    let low = Number.POSITIVE_INFINITY
    arr.forEach(element => {
        let num = Number(element);
        if(num < low) low = num;
    });
    return low; 
}
assertDeepEquals(findSmallestInt([78,56,232,12,8]),8)
assertDeepEquals(findSmallestInt([78,-56,232,412,-228]),-228)
assertDeepEquals(findSmallestInt([1,56,232,12,8]),1)