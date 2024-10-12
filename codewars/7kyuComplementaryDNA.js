import { assertDeepEquals } from "./testModule.js";

function dnaStrand(dna){
    const dnaDictionary = {
        "A":"T",
        "T":"A",
        "C":"G",
        "G":"C"
    };
    let dnaComplement = "";
    dna.split("").forEach(element => {
        dnaComplement += dnaDictionary[element]
    });
    return dnaComplement
  }
  assertDeepEquals(dnaStrand("ATCG"), "TAGC")