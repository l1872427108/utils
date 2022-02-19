import {call} from './call';

export function bind(Fn, obj, ...args) {
    // 返回一个新的函数
    return function (...args) {
        return call(Fn, obj, ...args);
    }
}