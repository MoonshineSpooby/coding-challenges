import { assertDeepEquals } from "./testModule.js";

function XO(str) {
    let exs = 0
    let ohs = 0
    str.split("").forEach(element => {
        if(element === 'x' || element === 'X') exs++;
        if(element === 'o' || element === 'O') ohs++;
    });
    if(exs == ohs) return true;
    else return false;
}
assertDeepEquals(XO("ooxx"), true);
assertDeepEquals(XO("xxo"), false);
assertDeepEquals(XO("asdf"), true);