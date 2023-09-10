const requestedDivs = 16;

function createGrid() {
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
        rowContainer.appendChild(div);
    }
}

createGrid();
