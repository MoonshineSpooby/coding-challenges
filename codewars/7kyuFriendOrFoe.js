//friend function takes in an array of strings and returns
//a list containing 

function friend(friends){
    return friends.filter((word) => word.length == 4);    
}
function assertEqArr(input, expected, result) {
    const errMsg = `test for ${input} failed. 
        You gave me ${result} but I need ${expected}`
    if(result.length !== expected.length) {
        console.log(errMsg)
        return
    }
    for(let i = 0; i < expected.length; i++){
        if(expected[i] !== result[i]) {
            console.log(errMsg)
            return
        }
    }
    return
}
assertEqArr(['aaa'], [], friend(['aaa']))
assertEqArr(['aaaa'], ['aaaa'], friend(['aaaa']))
assertEqArr(['aaaa', 'aaa', 'aabb'], 
    ['aaaa', 'aabb'], friend(['aaaa', 'aaa', 'aabb']))
assertEqArr(['aaaa', 'aaaaa', 'aabb'], 
    ['aaaa', 'aabb'], friend(['aaaa', 'aaaaa', 'aabb']))
assertEqArr(['****', 'aaaaa', 'aabb'], 
    ['****', 'aabb'], friend(['****', 'aaaaa', 'aabb']))
    