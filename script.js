/* ==========================================
        TYPING ANIMATION
========================================== */

const typingElement = document.getElementById("typing");

if (typingElement) {

const words = [
"Cyber Security Student",
"Java Developer",
"Python Developer",
"Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

let currentWord = words[wordIndex];

if (!deleting) {

typingElement.textContent =
currentWord.substring(0, charIndex);

charIndex++;

if (charIndex > currentWord.length) {

deleting = true;

setTimeout(typingEffect, 1500);

return;

}

} else {

typingElement.textContent =
currentWord.substring(0, charIndex);

charIndex--;

if (charIndex < 0) {

deleting = false;

wordIndex++;

if (wordIndex >= words.length)
wordIndex = 0;

}

}

setTimeout(typingEffect, deleting ? 50 : 120);

}

typingEffect();

}

/* ==========================================
        DARK / LIGHT MODE
========================================== */

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {

themeButton.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeButton.innerHTML="☀️";

localStorage.setItem("theme","light");

}else{

themeButton.innerHTML="🌙";

localStorage.setItem("theme","dark");

}

});

}

/* ==========================================
        LOAD SAVED THEME
========================================== */

const savedTheme = localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light-mode");

if(themeButton){

themeButton.innerHTML="☀️";

}

}
/* ==========================================
        ACTIVE NAVIGATION
========================================== */

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

const linkPage = link.getAttribute("href");

if(linkPage === currentPage || (currentPage === "" && linkPage === "index.html")){

link.classList.add("active");

}

});

/* ==========================================
        PAGE FADE ANIMATION
========================================== */

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s ease";

document.body.style.opacity="1";

},100);

});

/* ==========================================
        SCROLL TO TOP BUTTON
========================================== */

const topButton = document.querySelector(".top-btn");

if(topButton){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="inline-block";

}else{

topButton.style.display="none";

}

});

}

/* ==========================================
        IMAGE HOVER EFFECT
========================================== */

const images = document.querySelectorAll("img");

images.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.05)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

});

/* ==========================================
        CARD ANIMATION
========================================== */

const cards = document.querySelectorAll(
".card,.project-card,.certificate-card,.experience-card,.resume-card,.contact-box"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/* ==========================================
        BUTTON RIPPLE EFFECT
========================================== */

const buttons=document.querySelectorAll(".btn,.resume-btn");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

button.style.transform="scale(.95)";

setTimeout(()=>{

button.style.transform="scale(1)";

},150);

});

});

/* ==========================================
        PAGE TITLE EFFECT
========================================== */

document.title=document.title+" | Portfolio";

/* ==========================================
        CONSOLE MESSAGE
========================================== */

console.log("====================================");
console.log(" Mohammed Maaz Portfolio Loaded ");
console.log(" Developed using HTML CSS JavaScript ");
console.log("====================================");

/* ===========================
LOADER
=========================== */

window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){

document.getElementById("loader").style.display="none";

},800);

},2000);

});

/* ===========================
PROGRESS BAR
=========================== */

window.onscroll=function(){

progressBar();

scrollFunction();

};

function progressBar(){

let winScroll=document.body.scrollTop||document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

}

/* ===========================
BACK TO TOP
=========================== */

function scrollFunction(){

let btn=document.getElementById("topBtn");

if(document.body.scrollTop>200 || document.documentElement.scrollTop>200){

btn.style.display="block";

}

else{

btn.style.display="none";

}

}

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

/* ==========================================
        END OF SCRIPT
========================================== */
