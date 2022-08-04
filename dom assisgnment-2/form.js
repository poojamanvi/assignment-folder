let name1 = document.querySelector(".name")
let email = document.querySelector(".email")
let number = document.querySelector(".number")
let sumbit = document.querySelector(".sumbit")
let error1 = document.querySelector(".error1")
let error2 = document.querySelector(".error2")
let error3 = document.querySelector(".error3")
let error4  = document.querySelector(".error4")
let container = document.querySelector(".container")



sumbit.addEventListener('click',function (){

      
    let regExp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 

    if(name1.value == ""){
           error1.innerHTML = "Name is requried";
        
    }else if(email.value == ""){
           error2.innerHTML = "Email is requried"
    }else if (!regExp.test(email.value)){
           error2.innerHTML = "Invalid Email"
    }else if(number.value == ""){
        error3.innerHTML = "Phone Number is requried"
    }else{
        error1.innerHTML = "";
        error2.innerHTML = "";
        error3.innerHTML = "";

        let spanA = document.createElement("span");
        let spanB = document.createElement("span");
        let spanC = document.createElement("span");
        let spanD = document.createElement("span");

        spanA.style.background = "yellow"
        spanB.style.background = "yellow"
        spanC.style.background = "yellow"
        spanD.style.background = "Red"

        spanD.style.cursor = "pointer"
        
        
        
        container.appendChild(spanA).innerText = name1.value;
        container.appendChild(spanB).innerText = email.value;
        container.appendChild(spanC).innerText = number.value;
        container.appendChild(spanD).innerText = "Remove";

        spanD.addEventListener('click',function() {
            container.removeChild(spanA);
            container.removeChild(spanB);
            container.removeChild(spanC);
            container.removeChild(spanD);
            
            error4.innerText = "input field is empty"
           
            
        })


    }
});

