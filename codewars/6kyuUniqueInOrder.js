import { assertDeepEquals } from "./testModule.js";

var uniqueInOrder=function(iterable){
    if(!iterable) return [];
    let uniqueInOrder = []
    if(typeof iterable === 'string'){
        iterable.split('');
    }
    uniqueInOrder[0] = iterable[0]
    for(let i = 1; i < iterable.length; i++){
        if(iterable[i] !== uniqueInOrder[uniqueInOrder.length - 1]){
            uniqueInOrder.push(iterable[i]);
        }
    }
    return uniqueInOrder;
}

assertDeepEquals(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
assertDeepEquals(uniqueInOrder([1,2,2,3,3]), [1,2,3])
assertDeepEquals(uniqueInOrder([]), [])