const container = document.getElementById("container");
let targetBox = ""
let targetBoxId = ""
let targetBoxClass = ""

function createBoxes() {
    for (i = 0; i <= 255; i++) {
        let box = document.createElement("div");
        box.id = `box` + i;
        box.className = "squaresBlack";
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