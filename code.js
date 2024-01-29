
//get container width
const container_squares = document.getElementById("container");
const resize_btn = document.getElementById("resize");

//calculate width squares
let number_squares = 4;

let total_squares = number_squares * number_squares;

const squares_width = container_squares.clientWidth / number_squares -1.6;
//create div elements

for(let i= 0; i<total_squares; i++) {
const square = document.createElement("div");
      square.style.width = squares_width + "px";
      square.style.height = squares_width + "px";
   // INSERT square into parent node;
    container_squares.appendChild(square);
}

//Resize button open prompt and get a number;

resize_btn.addEventListener('click', ()=>{
 let number = parseInt(prompt("Number of Squares"));
let  number_squares = number;


 let total_squares = number_squares * number_squares;
 console.log("number is "+total_squares);
const squares_width = container_squares.clientWidth / number_squares -1.6;
//create div elements

// clean previus squares 
while (container_squares.firstChild) {
      container_squares.firstChild.remove()
  }
//repopulate new squares
for(let i= 0; i<total_squares; i++) {
const square = document.createElement("div");
      square.style.width = squares_width + "px";
      square.style.height = squares_width + "px";
   // INSERT square into parent node;
    container_squares.appendChild(square);
}
})




