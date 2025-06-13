/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

const rejectMessage = "Time Limit Exceeded"
var timeLimit = function(fn, t) {
    return async function (...args){
        const promise = await new Promise( (res, rej) => {
            const timer = setTimeout(() => {
                rej(rejectMessage)
            }, t)
            fn(...args)
                .then(res).catch(rej).finally(() => clearTimeout(timer))
        })
        return promise
    }
};


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100