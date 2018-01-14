const getValue = (event, datatype) => {
    let value;
    const type = datatype + ''.toLowerCase();

    switch(type) {
        case 'integer':
        case 'int':
            value = parseInt(event.target.value, 10);
            break;
        case 'boolean':
        case 'bool':
            value = event.target.type === 'checkbox' ? event.target.checked : Boolean(event.target.value);
            break;

        case 'float':
            value = parseFloat(event.target.value);
            break;

        default:
            value = event.target.value;
            break;
    }

    return value;
};

export default getValue;
