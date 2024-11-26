const container = document.querySelector('.container');

for (let i=0; i <(16*16); i++){
    let squaredDiv = document.createElement('div');
    squaredDiv.classList.add("square-div");
    container.appendChild(squaredDiv);
    
}