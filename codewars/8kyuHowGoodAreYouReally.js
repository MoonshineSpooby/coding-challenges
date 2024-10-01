import { assertBooleanEquals } from "./testModule.js";

function betterThanAverage(classPoints, yourPoints) {
    let classAverage = 
        classPoints.reduce((acc, curr) => acc + curr) / classPoints.length;
    if(yourPoints > classAverage) return true;
    else return false;
}
assertBooleanEquals(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true)