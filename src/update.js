const update = (state, key, value) => {
    const nextState = Object.assign({}, state);
    const parts = key.replace(/[^a-z0-9_-]+/g, '~').replace(/~$/, '').split('~');

    let current = nextState;

    while(parts.length) {
        const pathKey = parts.shift();

        if(!parts.length) {
            if(value === current[pathKey]) {
                return state;
            }
            current[pathKey] = value;
        } else if(Object.prototype.toString.call(current[pathKey]) === '[object Array]') {
            current[pathKey] = current[pathKey].slice();
        } else {
            current[pathKey] = Object.assign({}, current[pathKey]);
        }

        current = current[pathKey];
    }

    return nextState;
};

export default update;
