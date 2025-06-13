/**
 * @param {string} val
 * @return {Object}
 */
const expect = function(val){
    
    return {
        toBe: function(val2){
            if (val === val2) return true;
            else throw console.error("Not Equal")
        },
        notToBe: function(val2){
            if (val === val2) throw console.error("Equal");           
            else return true;
        }
    }
};
    //note: == and === are not the same. while JS obfuscates most types, strings and integer
    //  numbers may have the same value, but "5" and 5 on RH side of statements are not === but are ==


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
expect(null).notToBe(null)