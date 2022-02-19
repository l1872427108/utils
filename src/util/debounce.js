
/**
 * 
 * @param {*} func 
 * @param {*} wait 
 * @returns 
 */
export function debounce(func, wait) {
    let timer = null;
    return function () {
        if (timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.call(this, e);
            timer = null;
        }, time);
    }
}