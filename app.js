let slider = document.getElementById("myRange");
let requestedDivs = slider.value;
let setBySlider = false;
showValue();
requestGrid(setBySlider);

function createGrid(requestedDivs) {
    const container = document.getElementById('gridContainer');
    for (let i = 0; i < requestedDivs; i++) {
        createRow(container);
    }
}

function createRow(container) {
    const flexrow = document.createElement('div');
    flexrow.setAttribute('class', 'flexRow');
    container.appendChild(flexrow);
    createColumns(flexrow);
}

function createColumns(rowContainer) {
    for (let i = 0; i < requestedDivs; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        div.addEventListener('mouseenter', paintWhenHovered);
        rowContainer.appendChild(div);
    }
}

function requestGrid(setBySlider) {
    const container = document.getElementById('gridContainer');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    requestedDivs = //SLIDER VALUE
        createGrid(requestedDivs);
}

function paintWhenHovered() {
    this.style.backgroundColor = 'black';
}

//Get output element and show the value there
function showValue() {
    let output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}

slider.oninput = function () {
    setBySlider = true;
    return setBySlider;
}

console.log(slider.value);