/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function (x) {
        let y = x;
        for(let i = functions.length - 1; i > - 1; i--){
            y = functions[i](y);
        }
        return y;
    }    
};

const funs = [x => x + 1, x => x * x, x => 2 * x]
const init = 4
const testFn = compose(funs)
console.log(testFn(init))
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 * 
 * return function ()
 */