/**
 * 
 * @param {*} target 
 * @returns 
 */
export function clone(target) {
    // 类型判断
    if (typeof target === 'object' && target !== null) {
        // 判断数据是否为数组
        if (Array.isArray(target)) {
            return [...target];
        } else {
            return {...target};
        }
    } else {
        return target;
    }
}

/**
 * 
 * @param {*} target 
 * @returns 
 */
export function clone2(target) {
    // 类型判断
    if (typeof target === 'object' && target !== null) {
        // 创建一个容器
        const result = Array.isArray(target) ? [] : {};
        // 遍历
        for (let key in target) {
            // 自身的属性
            if (target.hasOwnProperty(key)) {
                // 设置
                result[key] = target[key];
            }
        }
        return result;
        
    } else {
        return target;
    }
}