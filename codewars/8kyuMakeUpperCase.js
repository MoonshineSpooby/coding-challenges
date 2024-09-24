import { assertDeepEquals } from "./testModule.js";

function makeUpperCase(str){
    return str.toUpperCase();
}

assertDeepEquals(makeUpperCase("aaa"), "AAA")
assertDeepEquals(makeUpperCase("a a a"), "A A A")
assertDeepEquals(makeUpperCase("aa1"), "AA1")