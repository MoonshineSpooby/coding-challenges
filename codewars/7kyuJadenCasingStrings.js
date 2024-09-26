String.prototype.toJadenCase = function () {
    let arr1 = this.split(" ")
    let arr = new Array()
    for(const ind in arr1) {
        arr.push(arr1[ind].split("")[0].toUpperCase() + arr1[ind].slice(1))
    }
    return arr.join(" ")
}

  ////tests - nothing logged means all tests passed
function assertEq(input, expected, rtn) {
    if (rtn == expected) return
    console.log(`test for ${input} failed. You gave me ${rtn} but I need ${expected}`)
}
assertEq('a', 'A', 'a'.toJadenCase())
assertEq('a a a a', 'A A A A', 'a a a a'.toJadenCase())
assertEq('as bs cs', 'As Bs Cs', 'as bs cs'.toJadenCase())
