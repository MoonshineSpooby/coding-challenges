function createBox(m, n) {
    let box = []
    let arr = []
    let distance // distance from edge of box = value of element
      for(let row = 1; row <= n; row++){
        for(let col = 1; col <= m; col++){
            distance = Math.min(col, row, (m - col + 1), (n - row + 1))
            arr.push(distance)             
        }
        box.push(arr)
        arr = []
        
    }
    console.log(box)
    return box
}

createBox(4,4)
// function assertEqArr(input, expected, result) {

// }

// assertEqArr([2, 2], [
//     [1, 1]
//     [1, 1]], createBox(2, 2))
// assertEqArr([3, 3], [
//     [1, 1, 1]
//     [1, 2, 1]
//     [1, 1, 1]], createBox(3, 3))