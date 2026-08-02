// ===============================
// MIRAVO PRODUCT PAGE
// ===============================

// Image Change

function changeImage(element){

document.getElementById("mainImage").src = element.src;

}



// Quantity

let quantity = 1;

const qtyInput = document.getElementById("qty");

function plus(){

quantity++;

qtyInput.value = quantity;

}

function minus(){

if(quantity>1){

quantity--;

qtyInput.value = quantity;

}

}



// Manual Input

qtyInput.addEventListener("input",()=>{

let value=parseInt(qtyInput.value);

if(isNaN(value)||value<1){

qtyInput.value=1;

quantity=1;

}else{

quantity=value;

}

});



// Button Animation

document.querySelectorAll(".cart,.buy").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});



// Scroll Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});
