translateX = (element,value) =>{
    element.style.transform = `translateX(${value})`;
}
translateY = (element,value) =>{
    element.style.transform = `translateY(${value})`;
}
translate = (element,xValue,yValue) =>{
    element.style.transform = `translate(${xValue}px,${yValue}px)`;
}
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
window.addEventListener('scroll',function(){
    let scrollY = window.scrollY;
    let scrollX = window.scrollX;
    translate(baloon,scrollX*1.2,scrollY);
    translate(b1,scrollX,scrollY)
    translate(b2,scrollX,scrollY*0.98)
    translate(b3,scrollX,scrollY*0.94)
    translate(b4,scrollX,scrollY*0.9)
    translate(b5,scrollX,scrollY*0.85)

});
var b1 = document.querySelector(".b1");
var b2 = document.querySelector(".b2");
var b3 = document.querySelector(".b3");
var b4 = document.querySelector(".b4");
var b5 = document.querySelector(".b5");
var baloon = document.querySelector(".baloon");

