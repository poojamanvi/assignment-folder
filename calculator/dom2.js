
let display = document.querySelector(".display")
let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((btn)=>{
    btn.addEventListener("click",(event)=>{
        let key = event.target.innerText;
       
        if(key == "C"){
            display.innerText = "0";
        }else if(key == "DEL"){
            if(display.innerText == "Infinity"){
                display.innerText = "";
            }else{
                display.innerText = display.innerText.slice(0,-1)
            }

        }else if(key == "="){
            if(display.innerText){
                display.innerText = eval(display.innerText);
            }
        }else if(key=="sin"){
            display.innerText =Math.sin(display.innerText)
        }else if(key == "cos"){
            display.innerText =Math.cos(display.innerText)
        }else if(key == "tan"){
            display.innerText =Math.tan(display.innerText)
        }else if(key == "log"){
            display.innerText =Math.log(display.innerText)
        }else if(key=="pow"){
            display.innerText =Math.pow(display.innerText,2)
        }else if(key=="root"){
            display.innerText =Math.sqrt(display.innerText)
        }else if(key=="pie"){
            display.innerText = 3.14159265359*display.innerText ;
        }else if(key=="e"){
            display.innerText  = 2.71828182846*display.innerText 

        }else if(key=="x!"){
            console.log('clicked');
            let num = display.innerText
            console.log(num);
            let fact = 1;
            function getfact(num) {
             for(let i=num;i=1;i--){
                 fact = fact*i
                 console.log('vasanth');
            }
             return fact
            }
            console.log(getfact())    
            
        }

        else{
            display.innerText += key
        }

    })
})