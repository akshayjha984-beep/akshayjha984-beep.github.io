// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });

});


// ================================
// DARK / LIGHT MODE
// ================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }

});


// Remember selected theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "🌙";
}


// ================================
// TYPING EFFECT
// ================================

const typingText = document.getElementById("typingText");

const words = [
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


// ================================
// PROJECT FILTER
// ================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }

        });

    });

});


// ================================
// BACK TO TOP
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    formMessage.textContent =
        "Message submitted successfully!";

    contactForm.reset();

});


// ================================
// SCROLL REVEAL
// ================================

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .about-card, .stat-card, .timeline-card"
    );

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "0.6s ease";

    observer.observe(element);

});