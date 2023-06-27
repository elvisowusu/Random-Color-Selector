let button = document.getElementById("button");
let child = document.getElementById("child");
let parent = document.getElementById("parent");
function colorFunc(){
    start= "0123456789ABCDEF";
    let randStart = Math.floor(Math.random()*15)
    let others = Math.floor(Math.random()*60000);
    let hexCode = "#"+start[randStart]+others;
   // let parentHexCode = "#"+start[randStart]+(others/2); 
    let parentHexCode = "#"+(others*23); 
    child.style.backgroundColor = hexCode; 
    parent.style.backgroundColor = parentHexCode;
}
button.addEventListener("click",colorFunc)