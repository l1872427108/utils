/**
 * 从左获取数组元素
 * @param {*} arr 
 * @param {*} size 
 * @returns 
 */
export function drop(arr, size) {
    // 过滤源数组
    return arr.filter((_, index) => index >= size);
}