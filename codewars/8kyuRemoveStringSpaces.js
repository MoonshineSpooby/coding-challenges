import { assertDeepEquals } from "./testModule.js";

function noSpace(x){
    let spacesRemoved = '';
    for(let i = 0; i < x.length; i++){
        if(x.charAt(i) !== ' ') spacesRemoved += `${x.charAt(i)}`
    }
    return spacesRemoved;
}

assertDeepEquals(noSpace('a  d'), "ad" )
assertDeepEquals(noSpace('    a'), 'a')
assertDeepEquals(noSpace('    '), '')
assertDeepEquals(noSpace(' bbbb'), 'bbbb')
assertDeepEquals(noSpace('bbbb'), 'bbbb')
assertDeepEquals(noSpace('a a a   a  a a     '), 'aaaaaa')
assertDeepEquals(noSpace('  8  8  8  8  '), '8888')