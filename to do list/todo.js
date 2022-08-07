let container1 = document.querySelector(".container1")
let displayTask = document.querySelector(".displayTask")
let completeTask = document.querySelector(".completeTask")
let input = document.querySelector("#input")
let sumbit = document.querySelector(".sumbit")


sumbit.addEventListener("click",()=>{
    
    let span = document.createElement("span");
    let edit = document.createElement("span");
    let remove = document.createElement("span");

    span.style.background = "lightyellow";
    span.style.border = "1px solid black";
    span.style.margin = "3px";
    span.style.width = "200px"
    

    edit.style.background = "lightgreen";
    edit.style.border = "1px solid black";
    edit.style.cursor = "pointer"
    // edit.style.margin = "5px";
    // edit.style.padding = "5px";

    remove.style.background = "red";
    remove.style.border = "1px solid black";
    remove.style.cursor = "pointer"
    // remove.style.margin = "5px";
    // remove.style.padding = "5px";
    
    displayTask.appendChild(span).innerText = input.value;
    displayTask.appendChild(edit).innerText = "edit";
    displayTask.appendChild(remove).innerText = "remove";



})