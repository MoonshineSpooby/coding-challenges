/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 * Given two integers dividend and divisor, divide two integers without using multiplication, 
 * division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. 
For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within 
the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is 
strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less 
than -231, then return -231.
 */
var divide = function (dividend, divisor) {
    // Special case: overflow.
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    /* We need to convert both numbers to negatives.
     * Also, we count the number of negatives signs. */
    let negatives = 2;
    if (dividend > 0) {
        negatives--;
        dividend = -dividend;
    }
    if (divisor > 0) {
        negatives--;
        divisor = -divisor;
    }
    let doubles = [];
    let powersOfTwo = [];
    /* Nothing too exciting here, we're just making a list of doubles of 1 and
     * the divisor. This is pretty much the same as Approach 2, except we're
     * actually storing the values this time. */
    let powerOfTwo = -1;
    while (divisor >= dividend) {
        doubles.push(divisor);
        powersOfTwo.push(powerOfTwo);
        // Prevent needless overflows from occurring...
        if (divisor < HALF_INT_MIN) {
            break;
        }
        divisor += divisor;
        powerOfTwo += powerOfTwo;
    }
    let quotient = 0;
    /* Go from largest double to smallest, checking if the current double fits.
     * into the remainder of the dividend. */
    for (let i = doubles.length - 1; i >= 0; i--) {
        if (doubles[i] >= dividend) {
            // If it does fit, add the current powerOfTwo to the quotient.
            quotient += powersOfTwo[i];
            // Update dividend to take into account the bit we've now removed.
            dividend -= doubles[i];
        }
    }
    /* If there was originally one negative sign, then
     * the quotient remains negative. Otherwise, switch
     * it to positive. */
    if (negatives !== 1) {
        return -quotient;
    }
    return quotient;
};