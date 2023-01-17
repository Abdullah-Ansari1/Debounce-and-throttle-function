
//Debounce Function
export function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}

//Throttle function
export function throttle(func, limit = 1000) {
    let lastFunc;
    let lastRan;
    return function () {
        if (!lastRan) {
            func.apply(this, arguments);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if (Date.now() - lastRan >= limit) {
                    func.apply(this, arguments);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}