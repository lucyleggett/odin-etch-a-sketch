document.addEventListener('DOMContentLoaded', (updateCanvas))

const squaresContainer = document.getElementById("container");
const fragment = document.createDocumentFragment();

function updateCanvas() {
    let squaresPerSide = prompt("How many squares would you like per side?");
    if ((squaresPerSide != null) && (squaresPerSide <= 100)) {
        for (let i = 0; i < (squaresPerSide ** 2); i++) {
            const box = document.createElement("div");
            box.classList.add("square");
            const percentage = (100 / squaresPerSide)
            box.style.flex = `0 0 ${percentage}%`;
            fragment.appendChild(box);
        }
        squaresContainer.appendChild(fragment);
    }
    else {
        alert("Please enter a number between 0 and 100.")
    }
};

squaresContainer.addEventListener("mouseover",(event) => {
    if (event.target.tagName === "DIV" && event.target !== squaresContainer) {
        event.target. style.backgroundColor = "black";
    }
});

const resetButton = document.querySelector("button");
resetButton.addEventListener("click", (event) => {
    squaresContainer.replaceChildren();
    updateCanvas();
})