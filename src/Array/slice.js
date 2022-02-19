
/**
 * 
 * @param {*} arr 
 * @param {*} begin 
 * @param {*} end 
 * @returns 
 */
export function slice(arr, begin, end) {
    // 若 arr 长度 0
    if (arr.length === 0) {
        return [ ];
    }
    
    // 判断 begin
    begin = begin || 0;

    // 是否越界
    if (begin >= arr.length) {
        return [ ];
    }

    end = end || arr.length;
    
    if (end < begin) {
        end = arr.length;
    }
    
    const result = [ ];

    for (let i = 0; i < arr.length; i++) {
        if (i >= begin && i < end) {
            result.push(arr[i]);
        }
    }

    return result;
}