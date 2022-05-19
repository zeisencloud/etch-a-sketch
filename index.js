const containerDiv = document.getElementById('#container');

const makeRows = (rows, columns) => {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.innerText = (i + 1);
        containerDiv.appendChild(square).className = "grid-item";
    };
};

makeRows(16, 16);