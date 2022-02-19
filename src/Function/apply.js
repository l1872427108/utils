export function apply(Fn, obj, args) {

    if (obj == null) {
        obj = globalThis;
    }
    obj.temp = Fn;

    let result = obj.temp(...args);

    delete obj.temp;

    return result;
}
