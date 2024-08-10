var mainRed = document.getElementById("mainRed");
const body = document.body;



mainRed.addEventListener("mousedown",function(){
    
    body.style.backgroundColor ="#F00000";
});
mainRed.addEventListener("mouseup",function(){
    
    body.style.backgroundColor ="#FFFFFF";
});
