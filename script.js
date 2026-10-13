const container = document.querySelector("div#container")
const slider = document.getElementById("nBlocks")
const sliderNum = document.getElementById("val")

slider.addEventListener("input", () => sliderNum.textContent = slider.value)

let numSquares = 16
let totalSquares = numSquares * numSquares

slider.addEventListener("mouseup", () => {numSquares = slider.value; totalSquares = numSquares*numSquares; createGrid(totalSquares, numSquares)})

function createGrid(tSquares, nSquares){
    container.innerHTML = ""
    for(let i = 0; i<tSquares; i++){
        let block = document.createElement("div")

        let sizeSquare = 100/nSquares
        block.setAttribute("style", `width:${sizeSquare}%;`)
        block.classList.add("block")
        block.addEventListener("mouseover", () => {block.setAttribute("style", `background-color: pink; width:${sizeSquare}%;`);})
        container.appendChild(block)
    }   
}

createGrid(256,16)