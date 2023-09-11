let requestedDivs = 0;

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
        div.addEventListener('mouseenter',paintWhenHovered);
        rowContainer.appendChild(div);
    }
}

function requestGrid() {
    const container = document.getElementById('gridContainer');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    requestedDivs = prompt("How big of a grid do you want? Enter a number between 1-99.");
    if (requestedDivs > 0 && requestedDivs < 100) {
        createGrid(requestedDivs);
    } else {
        alert("Please use a number between 1-100.")
    }
}

function paintWhenHovered() {
    this.style.backgroundColor = 'black';
}
