const container = document.querySelector("div#container")
const button = document.querySelector("button")

let numSquares = 16
let totalSquares = numSquares * numSquares

button.addEventListener("click", () => {numSquares = prompt("How many squares"); totalSquares = numSquares*numSquares; createGrid()})

function createGrid(){
    container.innerHTML = ""
    for(let i = 0; i<totalSquares; i++){
        let block = document.createElement("div")

        let sizeSquare = 100/numSquares
        block.setAttribute("style", `width:${sizeSquare}%;`)
        block.classList.add("block")
        block.addEventListener("mouseover", () => {block.setAttribute("style", `background-color: pink; width:${sizeSquare}%;`);})
        container.appendChild(block)
    }   
}
