import {assertDeepEquals} from "./testModule.js"
function solution(str){
    return str.split("").reverse().join("");
}

assertDeepEquals(solution('abc'), 'cba');
assertDeepEquals(solution(''), '');
assertDeepEquals(solution('aaa'), 'aaa');
assertDeepEquals(solution('  a '), ' a  ');