let div1 = document.querySelector('.div1')
div1.innerText = "Pooja Dahiya"
// console.log(document.querySelector('.div1'))
let div2 = document.querySelector('.div2')
div2.innerText = "My name is Pooja Dahiya. I live in Faridabad, Haryana.I am pursuing Full Stuck Development Course "
let div3 = document.querySelector('.div3')
div3.style.backgroundColor = "red"
let div = document.querySelectorAll('.div')
div[0].style.border="solid black"
div[1].style.border="solid black"
div[2].style.border="solid black"

let div7 = document.querySelector('.div7');
let node=document.createTextNode ("Aircampus");
 div7.appendChild(node);

 let tag = document.createElement("p");
 let text = document.createTextNode("This is my first assignment");
 tag.appendChild(text);
 let element = document.getElementsByClassName("newhtml");
 element.appendChild(tag);