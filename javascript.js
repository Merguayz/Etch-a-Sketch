let body = document.querySelector("body");
let container = document.querySelector(".container");

let btn = document.createElement("button");
body.appendChild(btn);
btn.innerText = "Resize";
btn.style.justifyContent = "center";
btn.style.marginBottom = "20px";
btn.style.padding = "20px";


for (let i = 1; i < 17;i++){
    for (let j = 1; j < 17; j++){
        const grid = document.createElement("div");
        grid.classList.add(j.toString() + i.toString())
        container.appendChild(grid);
        grid.addEventListener("mouseenter",(e) => {
            e.target.style.background = `rgb(${Math.random() * 255} ${Math.random() * 255} ${Math.random() * 255})`;
        });
    }
}

btn.addEventListener("click", (e) => {
    let resolution = parseInt(prompt("How many squares per side?"));
    if (resolution > 100) {
        resolution = 100;
    }
    container.innerHTML = "";
    for (let i = 1; i < resolution + 1;i++){
        for (let j = 1; j < resolution + 1; j++){
            const grid = document.createElement("div");
            grid.classList.add("grid");
            container.appendChild(grid);

            grid.style.height = `${640/resolution - 2}px`;
            grid.style.width = `${640/resolution - 2}px`;
            grid.style.opacity = "0%"

            grid.addEventListener("mouseenter",(e) => {
                e.target.style.background = `rgb(${Math.random() * 255} ${Math.random() * 255} ${Math.random() * 255})`;
                e.target.style.opacity = `${parseFloat(e.target.style.opacity) + 0.1}`;
                
            });
        }
    }
})



