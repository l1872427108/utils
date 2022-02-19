/**
 * 数组分块
 * @param {*} arr 
 * @param {*} size 
 * @returns 
 */
export function chunk(arr, size = 1) {
    if (arr.length === 0) {
        return [];
    }
    let result = [];

    let tmp = [];

    arr.forEach(item => {
        if (tmp.length === 0) {
            result.push(tmp);
        }
        
        tmp.push(item);
        
        if (tmp.length === size) {
            tmp = [];
        }
    })

    return result;
}
