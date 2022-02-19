
/**
 * 对象属性合并
 * @param  {...any} args 
 */
export function mergeObject(...objs) {
    const result = {};
    // 遍历
    objs.forEach(obj => {
        // 获取当前对象所有的属性
        Object.keys(obj).forEach(key => {
            // 检测 result 是否存在
            if (result.hasOwnProperty(key)) {
                result[key] = [].concat(result[key], obj[key]);
            } else {
                result[key] = obj[key];
            }
        })
    })
}