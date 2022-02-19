
/**
 * 数组扁平化
 * @param {*} arr 
 * @returns 
 */
export function flatten(arr) {
    let result = [];

    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result = result.concat(item);
        }
    })

    return result;
}

/**
 * 
 * @param {*} arr 
 * @returns 
 */
export function flatten2(arr) {
    let result = [...arr];
    
    while (result.some(item => Array.isArray(item))) {
        result = [].concat(...result);
    }

    return result;
}