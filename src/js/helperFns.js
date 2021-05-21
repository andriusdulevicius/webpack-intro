export default function createAndPrintElement(el, text, className = '') {
    const element = document.createElement(el);
    element.textContent = text;
    if (className != '') {
        element.className = className;
    } else {
        element.classList.remove();
    }
    return element;
}
