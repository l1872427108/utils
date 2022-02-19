/**
 * 数组合并
 * @param {Array} arr 
 * @param  {Array} args 
 * @returns {Array}
 */
export function concat(arr, ...args) {
    let result = [...arr];
    args.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    })
    return result;
}
