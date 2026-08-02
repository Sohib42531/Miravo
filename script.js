// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});



// Header Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>30){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

}

else{

header.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

}

});




// Fade Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".product-card,.benefit-card,.review-card,.about-image,.about-content").forEach(el=>{

observer.observe(el);

});




// Button Hover Effect

document.querySelectorAll(".btn,.btn2,.buy,.nav-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});
