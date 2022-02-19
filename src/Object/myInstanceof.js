
/**
 * 
 * @param {*} obj 
 * @param {*} Type 
 */
export function myInstanceOf(obj, Fn) {
    // 检测
    let prototype = Fn.prototype;
    
    // 
    let proto = obj.__proto__;

    while (proto) {
        // 检测
        if (prototype === proto) {
            return true;
        }
        // 不等于
        proto = proto.__proto__;
    }

    return false;
}