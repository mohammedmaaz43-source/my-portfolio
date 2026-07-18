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
