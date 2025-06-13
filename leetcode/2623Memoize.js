/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
    let cache = {}
    
    return function(...args){
        const key = JSON.stringify(args)
        if(key in cache) return cache[key]
        cache[key] = fn(...args)
        return cache[key];
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

let callCount = 0; 

function sum(a,b){
   callCount++
   return a + b;

}


const memoizedFn = memoize(function (a, b){
    sum(a,b)
})

 memoizedFn(2,5)
 memoizedFn(2,5)
 console.log(callCount)
