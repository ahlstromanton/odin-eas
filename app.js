function createGrid() {
    numberOfDivs = 0;
    requestedDivs = 16;
    while (numberOfDivs < requestedDivs) {
        const container = document.querySelector('#masterDivContainer');
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        div.setAttribute('id', 'square-item' + numberOfDivs);
        container.appendChild(div);
        numberOfDivs++;
    }
}