const container = document.getElementById("container");
let targetBox = ""
let targetBoxId = ""
let targetBoxClass = ""
let gridSizeButton = document.getElementById("gridSizeButton")
let gridSizeInput = document.getElementById("gridSizeInput")
let gridSize = "16"



function createBoxes() {

    if (gridSize > 100) {
        gridSize = 100
    }

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    

    for (i = 0; i <= gridSize * gridSize - 1; i++) {
        let box = document.createElement("div");
        box.id = `box` + i;
        box.className = "squaresBlack";
        box.style.width = (640 / gridSize -2) + "px";
        container.appendChild(box);
    }
}

/* container.addEventListener('click', (event) => {
    targetBoxId = event.target.id;
    targetBoxClass = event.target.className;
    console.log(targetBoxId);
    
    if (targetBoxClass === "squaresBlack") {
        event.target.className = "squaresWhite";
    }

    else if (targetBoxClass === "squaresWhite") {
        event.target.className = "squaresBlack";
    }
})
*/

gridSizeButton.addEventListener('click', (event) => {
    gridSize = gridSizeInput.value;
    gridSizeInput.textContent = "";
    createBoxes()
})

container.addEventListener('mousedown', (event) => {
    hover(event)
    
    container.addEventListener('mouseover', (hover))

    document.addEventListener('mouseup', () => {
        container.removeEventListener('mouseover', (hover))
    })
})

function hover(event) {
    targetBoxId = event.target.id;
    targetBoxClass = event.target.className;
    console.log(targetBoxId);
    
    if (targetBoxClass === "squaresBlack") {
        event.target.className = "squaresWhite";
    }

    else if (targetBoxClass === "squaresWhite") {
        event.target.className = "squaresBlack";
    }
}

createBoxes()