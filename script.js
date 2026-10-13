const container = document.querySelector("div#container")
const slider = document.getElementById("nBlocks")
const sliderNum = document.getElementById("val")
const colorRandomizer = document.querySelector("input#randomColor")

slider.addEventListener("input", () => sliderNum.textContent = slider.value)

slider.addEventListener("mouseup", () => {let numSquares = slider.value; let totalSquares = numSquares*numSquares; createGrid(totalSquares, numSquares)})

function createGrid(tSquares, nSquares){
    container.innerHTML = ""
    for(let i = 0; i<tSquares; i++){
        let block = document.createElement("div")
        let sizeSquare = 100/nSquares

        let blockColor = getRandomColor()
        block.setAttribute("style", `width:${sizeSquare}%;`)
        block.classList.add("block")

        block.addEventListener("mouseover", () => colorize(block,sizeSquare,blockColor))

        container.appendChild(block)
    }   
}

function colorize(BL,SS,BC){
    let blockColor = getRandomColor()
    if (colorRandomizer.checked == true){
        BL.setAttribute("style", `background-color: ${BC}; width:${SS}%;`);
    } else {
        BL.setAttribute("style", `background-color: gray; width:${SS}%`);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return(color);
}

createGrid(256,16)