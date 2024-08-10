var cursor = document.querySelector("#cursor")
var body = document.querySelector("body")
var h1ofPart1 = document.querySelector("#part1 #h1overlay")
var tl = gsap.timeline()
body.addEventListener("mousemove", function(e){
    console.log(e)
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        transform:"translate(-50%,-50%)",
        duration:0.1,

    })
})

h1ofPart1.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:0.5
    })
})
h1ofPart1.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1
    })
})