/**
 * 
 * @param {*} func 
 * @param {*} wait 
 * @returns 
 */
export function throttle(func, wait) {
    let start = 0;

    return function (e) {
        // 获取当前的
        let now = Date.now();
        // 判断 now - start >= wait
        if (now - start >= wait) {
            // 满足
            func.call(this, e);

            start = now;
        }
    }
}