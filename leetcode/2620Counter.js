/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let tiktok = n - 1;
    function updateCounter() {
        tiktok++
        return tiktok
    }
    return updateCounter
}
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

const counter = createCounter(10)
console.log(counter(), counter(), counter())