function reset() {
    setValue(0);
    setColor('green')
}

function increase() {
    const currentValue = getValueById('display');
    newValue = currentValue + 1;
    setValue(newValue);
    if (newValue > 0) {
        setColor('blue');
    }
    else if (newValue === 0) {
        setColor('green');
    }
    else {
        setColor('red');
    }

}


function decrease() {
    const currentValue = getValueById('display');
    newValue = currentValue - 1;
    setValue(newValue);
    if (newValue > 0) {
        setColor('blue');
    }
    else if (newValue === 0) {
        setColor('green');
    }
    else {
        setColor('red');
    }
}


function setColor(color) {
    document.getElementById('display').style.color = color;
}