document.addEventListener('DOMContentLoaded', (updateCanvas))

const squaresContainer = document.getElementById("container");
const fragment = document.createDocumentFragment();

function updateCanvas() {
    let squaresPerSide = prompt("How many squares would you like per side on your Etch-a-Sketch?");
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

let opacity = 0.1;

squaresContainer.addEventListener("mouseover",(event) => {
    if ((event.target.tagName === "DIV") && (event.target !== squaresContainer)) {
            if (opacity < 1) {
                opacity += 0.1;
            }
            else {
                opacity = (opacity - 0.9);
            }
        event.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    }
});


const resetButton = document.querySelector("button");
resetButton.addEventListener("click", (event) => {
    squaresContainer.replaceChildren();
    updateCanvas();
})