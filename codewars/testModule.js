export function assertDeepEquals(uut, expected) {
    const failureMessage = `Expected: ${expected}
                            You gave: ${uut}`
    if(uut.length !== expected.length) {
        console.log(failureMessage)
        return
    }
    if(uut.length == 1 || !uut.length) {
        if(uut !== expected) {
            console.log(failureMessage)
            return
        }
    }
    for(let i = 0; i < expected.length; i++){
        if(expected[i] !== uut[i]){
            console.log(failureMessage)
            return
        }
    }
}
export function assertNumberEquals(uut, expected){
    const failureMessage = `Expected: ${expected}
                            You gave: ${uut}`
    if(uut !== expected){
        console.log(failureMessage)
        return
    }
    
}
