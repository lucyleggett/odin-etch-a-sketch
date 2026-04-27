const squaresContainer = document.getElementById("container")
const fragment = document.createDocumentFragment();

for (let i = 0; i < 16; i++) {
    const box = document.createElement("div");
    box.classList.add("square");
    fragment.appendChild(box);
}

squaresContainer.appendChild(fragment);
// const box1 = document.createElement("div");
// box1.appendChild(squaresContainer);
// const box2 = document.createElement("div");
// box2.appendChild(squaresContainer);
// const box3 = document.createElement("div");
// box3.appendChild(squaresContainer);
// const box4 = document.createElement("div");
// box4.appendChild(squaresContainer);
// const box5 = document.createElement("div");
// box5.appendChild(squaresContainer);
// const box6 = document.createElement("div");
// box6.appendChild(squaresContainer);
// const box7 = document.createElement("div");
// box7.appendChild(squaresContainer);
// const box8 = document.createElement("div");
// box8.appendChild(squaresContainer);
// const box9 = document.createElement("div");
// box9.appendChild(squaresContainer);
// const box10 = document.createElement("div");
// box10.appendChild(squaresContainer);
// const box11 = document.createElement("div");
// box11.appendChild(squaresContainer);
// const box12 = document.createElement("div");
// box12.appendChild(squaresContainer);
// const box13 = document.createElement("div");
// box13.appendChild(squaresContainer);
// const box14 = document.createElement("div");
// box14.appendChild(squaresContainer);
// const box15 = document.createElement("div");
// box15.appendChild(squaresContainer);
// const box16 = document.createElement("div");
// box16.appendChild(squaresContainer);

