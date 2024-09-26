function tribonnaci(signature, n) {
    if(n == 0) return []
    if(n == 1) return [signature[0]]
    if(n == 2) return signature.slice(0,2)
    if(n == 3) return signature
    let n1 = signature[0]
    let n2 = signature[1]
    let n3 = signature[2]
    for(let i = 0; i < n - 3; i++){
        signature.push(n1 + n2 + n3)
        n1 = n2
        n2 = n3 
        n3 = signature[(signature.length-1)]
    }
    return signature
}
////tests - nothing logged means all tests passed
function assertEqArr(input, expected, rtn) {
    const errMsg = `test for ${input} failed. You gave me ${rtn} but I need ${expected}`
    if(rtn.length !== expected.length) {
        console.log(errMsg)
        return
    }
    for(let i = 0; i < expected.length; i++){
        if(expected[i] !== rtn[i]) {
            console.log(errMsg)
            return
        }
    }
    return
}
assertEqArr([1,1,1], [], tribonnaci([1,1,1], 0))
assertEqArr([1,1,1], [1], tribonnaci([1,1,1], 1))
assertEqArr([1,1,1], [1,1], tribonnaci([1,1,1], 2))
assertEqArr([1,1,1], [1,1,1], tribonnaci([1,1,1], 3))
assertEqArr([1,1,1], [1,1,1,3,5,9,17,31,57,105], tribonnaci([1,1,1], 10))
assertEqArr([1,0,0], [1,0,0,1,1,2,4,7,13,24], tribonnaci([1,0,0], 10))