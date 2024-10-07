import { assertNumberEquals } from "./testModule.js";

function findUniq(arr) {
    let num1 = arr[0];
    let num2 = arr[1];
    if(arr[0] !== arr[1]){
        if(arr[2] == arr[0]) return arr[1]
        return arr[0]
    }
    let repeatingNumber = Number(arr[0]);
    for(let i = 2; i < arr.length; i++){
        if(Number(arr[i]) !== repeatingNumber){
            return Number(arr[i])
        }
    }
}
assertNumberEquals(findUniq([ 1, 0, 0 ]), 1);
assertNumberEquals(findUniq([ 1, 1, 2, 1, 1 ]), 2);
assertNumberEquals(findUniq([ 3, 10, 3, 3, 3 ]), 10);