function reset() {
    setValue(0);
}

function increase() {
    const currentValue = getValueById('display');
    newValue = currentValue + 1;
    setValue(newValue);
}


function decrease() {
    const currentValue = getValueById('display');
    newValue = currentValue - 1;
    setValue(newValue);
}