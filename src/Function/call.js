export function call(Fn, obj, ...args) {
    // 严格
    if (obj == null) {
        obj = globalThis; // 全局对象
    }
    obj.temp = Fn;
    let result = obj.temp(...args);
    delete obj.temp;
    return result;
}

