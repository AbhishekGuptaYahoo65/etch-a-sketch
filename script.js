//const container = document.getElementById('container');
const container = document.querySelector('.container');

function createGrid(size){
    container.innerHTML = '';
    const squareSize = 960/size;

    for(let i=0; i< size * size; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${squareSize}px`;
        gridItem.style.height = `${squareSize}px`;

        gridItem.addEventListener('mouseenter', ()=>{
            gridItem.style.backgroundColor = 'darkgreen';
        });

        container.appendChild(gridItem);
    }
}

// function createGrid(size) {
//     // Clear existing grid
//     container.innerHTML = '';
    
//     const squareSize = 960 / size; // Calculate size of each square

//     for (let i = 0; i < size * size; i++) {
//         const gridItem = document.createElement('div');
//         gridItem.classList.add('grid-item');
//         gridItem.style.width = `${squareSize}px`;
//         gridItem.style.height = `${squareSize}px`;

//         // Add hover effect
//         gridItem.addEventListener('mouseenter', () => {
//             gridItem.style.backgroundColor = 'darkgreen'; // Change color on hover
//         });

//         // gridItem.addEventListener('mouseleave', () => {
//         //     gridItem.style.backgroundColor = 'lightgreen'; // Revert to default color
//         // });

//         container.appendChild(gridItem);
//     }
// }

// Initial grid creation with 16 boxes
createGrid(16);

let resetGrid = document.querySelector('.resetButton');

resetGrid.addEventListener('click',()=>{
    createGrid(16);
});

// Resize grid on button click

let resizeGrid = document.querySelector('#resizeButton');

function reSize(){
    let newSize = prompt("Enter the number of squares per side (max 100):");

    if(newSize !== null){
        newSize = parseInt(newSize);
        if(newSize>0 && newSize <=100){
            createGrid(newSize);
        }else{
            alert("Please Enter a valid number between 1 to 100");
        }
    }
}

resizeGrid.addEventListener('click', ()=> reSize());

// document.getElementById('resizeButton').addEventListener('click', () => {
//     let newSize = prompt("Enter the number of squares per side (max 100):");
//     //console.log(typeof(newSize));
//     // Validate input
//     if (newSize !== null) {
//         newSize = parseInt(newSize);
//         if (newSize > 0 && newSize <= 100) {
//             createGrid(newSize);
//         } else {
//             alert("Please enter a valid number between 1 and 100.");
//         }
//     }
// });