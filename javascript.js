let body = document.querySelector("body");
let container = document.querySelector(".container")

for (let i = 1; i < 17;i++){
    for (let j = 1; j < 17; j++){
        const grid = document.createElement("div");
        grid.classList.add(j.toString() + i.toString())
        container.appendChild(grid);
        grid.addEventListener("mouseover",(e) => {
            e.target.style.background = "black"
        });
    }
}
