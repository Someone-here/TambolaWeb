var i = [];
let paused;
let a;
const text = document.querySelector(".text");
const bn1 = document.querySelector(".btn1");
const bn2 = document.querySelector(".btn2");

    document.querySelector(".play").addEventListener("click", function(){
        console.log("unpaused");
        bn1.classList.add("active");
        bn2.classList.remove("active");
        paused = false;
    })
    document.querySelector(".pause").addEventListener("click", function(){
        console.log("paused");
        bn2.classList.add("active");
        bn1.classList.remove("active");
        paused = true;
    })
    for (var z = 0; z<90;z++){
    setTimeout(function(){
        if(!paused){
            a = Math.floor((Math.random() * 90) + 1);
            while (i.includes(a)){
                a = Math.floor((Math.random() * 90) + 1);
            }
            i.push(a);
            console.log(z, a);
            text.innerHTML = a;
        }
        else {
            console.log(z ,a);
        }
    }, 2000*z);
}



   
        
    
   
  