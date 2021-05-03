"use strict"

let nav=document.getElementById("nav")
let navButton=document.getElementById("navbutton")

navButton.addEventListener("click",function(){
    //console.log("Klickad på: )");
    nav.classList.toggle("sidobar__open")
})

document.addEventListener("keydown",function(event){
    if(event.key ==="Escape" && nav.classList.contains("open")){
        nav.classList.toggle("sidobar__open")
    }
})