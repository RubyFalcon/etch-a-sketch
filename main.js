const container = document.querySelector('.container');
//todo: turn the for into n  * n and use n to get the width and height of the div
// e.g div.height = container.height / n;
let n = 16




function createDivs(n){
    //16 is euqal to the flex gap(12 ) + the total border px (4)
    let axis = (550/n);
    console.log(axis);
    container.innerHTML = '';

    for (let i=0; i <(n**2); i++){
        let squaredDiv = document.createElement('div');
        squaredDiv.classList.add("square-div");
        container.appendChild(squaredDiv);
        squaredDiv.setAttribute("style", `width: ${axis}px; height: ${axis}px`)
        squaredDiv.addEventListener("mouseover", ()=> {
            squaredDiv.style.backgroundColor = "rgb(51,51,51)";
        }
        )
        
    }
    
}
// button functionality

createDivs(16);
const button = document.querySelector("button");
button.addEventListener("click", ()=> {
    let n = prompt("Please enter number between 1-100");
    while (n < 0 || n > 100 ){
        n = prompt("Please enter number between 1-100") ;
    }
    createDivs(n);
    

    
})




