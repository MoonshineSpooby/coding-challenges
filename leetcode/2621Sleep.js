/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    setTimeout(millis).then()
    return Promise.allSettled
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */