/**
 * 从右获取数组元素
 * @param {*} arr 
 * @param {*} size 
 * @returns 
 */
export function dropRight(arr, size) {
    return arr.filter((_, index) => index < arr.length - size);
}