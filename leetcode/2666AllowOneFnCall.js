/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let ranYet = false;
    return function (...args){
        if(!ranYet){
            ranYet = true;
            return fn.apply(this, args);
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
let testFn = (a,b,c) => (a + b + c);
let onceFn = once(testFn)

console.log(onceFn(1,2,3))
console.log(onceFn(2,3,6))