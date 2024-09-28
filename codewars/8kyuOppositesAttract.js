import { assertEquals } from "./testModule.js";

function lovefunc(flower1, flower2){
    flower1 = flower1 %2
    flower2 = flower2 %2
    if(flower1 !== flower2) return true;
    else return false;
}
assertEquals(lovefunc(1,4), true)
assertEquals(lovefunc(0,0), false)
assertEquals(lovefunc(0,2), false)
assertEquals(lovefunc(0,3), true)
