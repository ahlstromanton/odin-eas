function createGrid() {
    numberOfDivs = 0;
    requestedDivs = 16;
    while (numberOfDivs < requestedDivs) {
        const container = document.querySelector('#masterDivContainer');
        const div = document.createElement('div');
        div.setAttribute('style', 'backround: red; border: 1px solid; height: 49px; width: 49px;');
        container.appendChild(div);
        numberOfDivs++;
    }
}