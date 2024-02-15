function getValueById(element) {
    const textElement = document.getElementById(element);
    const valueText = textElement.innerText;
    const value = parseInt(valueText);
    return value;
}