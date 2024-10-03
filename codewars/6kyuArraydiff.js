function arrayDiff(a, b){
    while(b.length){
        let bElement = b.pop()
        a = a.filter((x) => x !== bElement)
      }
      return a
}


assertDeepEquals(("[1,2], [2]"),[2],arrayDiff([1,2], [1]))
assertDeepEquals(("[3,3,3,3], [3]"), [], arrayDiff([3,3,3,3] , [3]))



function assertDeepEquals(input, expected, uut) {
    const successMessage = `test passed for input: ${input}
                            output matched the expected:${uut}`
    const failureMessage = `test failed for input: ${input}
                            Expected: ${expected}
                            You gave: ${uut}`
    for(let i = 0; i < expected.length; i++){
        if(expected[i] !== uut[i]){
            console.log(failureMessage)
            return
        }
    }
    console.log(successMessage)
}
