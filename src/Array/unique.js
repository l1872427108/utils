/**
 * 
 * @param {*} arr 
 * @returns 
 */
export function unique(arr) {
    const result = [];

    arr.forEach(item => {
        // 检测 result 是否包含
        if (result.indexOf(item) === -1) {
            // 则插入
            result.push(item);
        }
    })
    
    return result;
}

/**
 * 
 * @param {*} arr 
 * @returns 
 */
export function unique2(arr) {
    const result = [];

    const obj = {};

    arr.forEach(item => {
        if (!obj[item]) {
            // 将 item 作为下标存储到 obj
            obj[item] = true;
            result.push(item);
        }
    })

    return result;
}

/**
 * 
 * @param {*} arr 
 * @returns 
 */
export function unique3(arr) {
    // 将数组转换为集合
    let set = new Set(arr);
    let array = [...set];
    return array;
}