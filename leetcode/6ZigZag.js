/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s;
    let n = s.length
    let m = numRows;
    let p = 0; // row
    let q = 0; // column
    let goingDown = true;
    let matrix = Array.from({ length: m}, () => Array(n).fill());
    matrix[p][q] = s.charAt(0);
    for(let i = 1; i < n; i++){
        if(p == m - 1){
            goingDown = false;
        } else if(q % (m - 1) == 0){
            goingDown = true;
        }
        if(goingDown) {
            p++;
            matrix[p][q] = s.charAt(i);            
        } else {
            p--;
            q++;
            matrix[p][q] = s.charAt(i);
            
        }
    }
    let ans = "";
    for(p = 0; p < m; p++){
        for(q = 0; q < (n / 2); q++){
            if(matrix[p][q] != null){
                ans += matrix[p][q]
            }
        }
    }
    return ans;

};

//console.log("PAHNAPLSIIGYIR: "+convert("PAYPALISHIRING", 3))
console.log("abcdefghijklmnop: "+convert("abcdefghijklmnop", 1))