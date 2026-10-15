const container = document.querySelector("div#container")
const slider = document.getElementById("nBlocks")
const sliderNum = document.getElementById("val")
const colorRandomizer = document.querySelector("input#randomColor")
const opacityValue = document.querySelector("input#opacity")

slider.addEventListener("input", () => sliderNum.textContent = slider.value)

slider.addEventListener("mouseup", () => {let numSquares = slider.value; let totalSquares = numSquares*numSquares; createGrid(totalSquares, numSquares)})

function createGrid(tSquares, nSquares){
    container.innerHTML = ""
    for(let i = 0; i<tSquares; i++){
        let block = document.createElement("div")
        let sizeSquare = 100/nSquares

        let blockColor = getRandomColor()
        let currentOpacity = 0
        block.style.width = `${sizeSquare}%`
        block.classList.add("block")

        block.addEventListener("mouseover", () => {colorize(block,sizeSquare,blockColor) , opacityChanger(block)})

        container.appendChild(block)
    }   
}

function colorize(BL,SS,BC){
    if (colorRandomizer.checked == true){
        BL.style.backgroundColor = `${BC}`;
        BL.style.width = `${SS}`
    } else {
        BL.style.backgroundColor = `gray`
        BL.style.width = `${SS}`
    }
}

function opacityChanger (BL){
    if (opacityValue.checked == true){
        let currentOpacity = BL.style.opacity
        currentOpacity = Number(currentOpacity) + 0.1
        BL.style.opacity = `${currentOpacity}`
        console.log(BL.style.opacity)
    } else {
        BL.style.opacity = `1`
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