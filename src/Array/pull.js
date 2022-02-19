/**
 * 数组删除元素
 * @param {*} arr 
 * @param  {...any} args 
 * @returns 
 */
export function pull(arr, ...args) {
    // 删掉的元素
    const result = []; 
    
    for (let i = 0; i < arr.length; i++) {
        if (args.includes(arr[i])) {
            result.push(arr[i]);
            arr.splice(i, 1);
            // 下标自减
            i--;
        }
    }

    return result;
}
