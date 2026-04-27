const squaresContainer = document.getElementById("container")
const fragment = document.createDocumentFragment();

for (let i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.classList.add("square");
    fragment.appendChild(box);
}

squaresContainer.appendChild(fragment);

squaresContainer.addEventListener("mouseover",(event) => {
    if (event.target.tagName === "DIV" && event.target !== container) {
        event.target. style.backgroundColor = "lightblue";
    }
});