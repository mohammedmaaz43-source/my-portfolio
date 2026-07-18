// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior:"smooth"
        });
    });
});

// Reveal animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            section.style.opacity="1";
            section.style.transform="translateY(0)";
        }

    });

});

const text = [
    "Cyber Security Student",
    "Java Developer",
    "Python Developer",
    "Web Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    currentText = text[index];

    if (!isDeleting) {

        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        document.getElementById("typing").textContent =
            currentText.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {
            isDeleting = false;
            index++;

            if (index == text.length)
                index = 0;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);
}

AOS.init({
    duration:1000,
    once:true
});

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }
});

typeEffect();
