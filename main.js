const container = document.querySelector('.container');
//todo: turn the for into n  * n and use n to get the width and height of the div
// e.g div.height = container.height / n;
let n = 16




function createDivs(n){
    let axis = (960/n)-16;
    console.log(axis);

    for (let i=0; i <(n**2); i++){
        let squaredDiv = document.createElement('div');
        squaredDiv.classList.add("square-div");
        container.appendChild(squaredDiv);
        squaredDiv.setAttribute("style", `width: ${axis}px; height: ${axis}px`)
    }
    
}

createDivs(16);
