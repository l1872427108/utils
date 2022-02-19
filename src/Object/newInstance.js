/**
 * new
 * @param {*} Fn 
 * @param  {Array} args 
 * @returns 
 */
export function newInstance(Fn, ...args) {
    // 创建一个新对象
    const obj = {};
    // this 指向
    const result = Fn.call(obj, ...args);
    // 原型
    obj.__proto__ = Fn.prototype;
    // 返回新对象
    return result instanceof Object ? result : obj;
}