import { assertDeepEquals } from "./testModule.js"

function areYouPlayingBanjo(name) {
    if(name.charAt(0) == 'r' || name.charAt(0) == 'R'){
        return name + " plays banjo"
    }
    return name + " does not play banjo"
}

assertDeepEquals(areYouPlayingBanjo("ry"), "ry plays banjo");
assertDeepEquals(areYouPlayingBanjo("Ry"), "Ry plays banjo");
assertDeepEquals(areYouPlayingBanjo("by"), "by does not play banjo");