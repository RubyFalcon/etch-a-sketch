const container = document.querySelector('.container');
//todo: turn the for into n  * n and use n to get the width and height of the div
// e.g div.height = container.height / n;
let n = 16




function createDivs(n){
    //16 is euqal to the flex gap(12 ) + the total border px (4)
    let axis = (960/n)-16;
    console.log(axis);

    for (let i=0; i <(n**2); i++){
        let squaredDiv = document.createElement('div');
        squaredDiv.classList.add("square-div");
        container.appendChild(squaredDiv);
        squaredDiv.setAttribute("style", `width: ${axis}px; height: ${axis}px`)
        squaredDiv.addEventListener("mouseover", ()=> {
            squaredDiv.style.backgroundColor = "red";
        }
        )
        
    }
    
}
// button functionality
createDivs(16);
const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    let n = prompt("Please enter number between 1-100");
    if (n > 100){
        n = prompt("Number must be less than 100 and greater than 0")
    }
    // else if(!(typeof(n)=== "number")){
    //     n = prompt("Input must be a number")
    // }

    else {
        createDivs(n);
    }
})




