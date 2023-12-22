let color = 'black';
let click = false;
let size = 16; // initially set it to false so that it doesn't activate
document.addEventListener('DOMContentLoaded', ()=>{
createGrid()
console.log('hello');
  
});
//creating the default grid

// create a function to make the canvas space
function createGrid(size = 16){
let container = document.querySelector('.container');
 container.style.display ='grid';
 container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;// use backticks if you have template literals/
 container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

 let AreaDiv = size * size;

for(i =1; i < AreaDiv; i++){
    let Divs = document.createElement('div')
    container.insertAdjacentElement("beforeend", Divs);
    //add an event listener for the divs?
    Divs.addEventListener('mouseover',colorDiv);// why did we not use a function()
    //add a class for updating 
  Divs.classList.add('grid-box');
    
}
}
//functions for the buttons
function setColor(colorChoice){
    color = colorChoice;   
}
//function for the divs turning color
function colorDiv(){
    if(color == "black")
    {this.style.background = '#000';}
    else{
        let hue = Math.floor(Math.random()*360);
        this.style.background = `hsl(${hue}, 100%, 50%)`;
    }
}
// eraser
function eraser(){
    let Divs = document.querySelectorAll('div[class="grid-box"]');
    Divs.forEach(div => div.style.background = '#fff');
}

//input size
function inputSize(){
    input = prompt('Input a number between 16 and 100')
    size = input;
    let message = document.getElementById('message');
    if(input <16 || input > 100){
message.innerHTML = "Please input a number within range."}
else if(input == ""){
    message.innerHTML = "please enter a number"
}
else{
    message.innerHTML =" You can Now play"
}
 return input;   
}
//connect input size function to create board function by another function that you'll connect to the button
function buttonInput(){
    let size = inputSize();
    createGrid(size);
   
}
//reseting the canvas
function resetCanvas(){
  
   let Divs = document.querySelectorAll('div[class="grid-box"]');
   Divs.forEach(div => div.remove())
}
