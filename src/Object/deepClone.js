/**
 * 不能循环引用
 * @param {*} target 
 * @returns 
 */
export function deepClone(target, map = new Map()) {
    // 检测类型
    if (typeof target === 'object' && target !== null) {
        // 判断是否克隆过
        let cache = map.get(target);
        if (cache) {
            return cache;
        }
        let isArray = Array.isArray(target);
        const result = isArray ? [] : {};
        // 将新的结构存入
        map.set(target, result);
        // 遍历
        if (isArray) {
            // forEach
            target.forEach((item, index) => {
                result[index] = deepClone(item, map);
            })
        } else {
            // 对象
            Object.keys(target).forEach(key => {
                result[key] = deepClone(target[key], map);
            })
        }
        return result;
    } else {
        return target;
    }
}