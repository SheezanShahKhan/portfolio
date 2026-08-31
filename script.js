/* ========================================
PORTFOLIO JAVASCRIPT
Sheezan Shah Khan
======================================== */

/* ========================================

1. MOBILE NAVIGATION
   ======================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    if (isOpen) {

        menuBtn.textContent = "✕";
        menuBtn.setAttribute("aria-label", "Close menu");

    } else {

        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-label", "Open menu");

    }

});

}

/* ========================================
2. CLOSE MOBILE MENU
======================================== */

const navigationLinks =
document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

link.addEventListener("click", () => {

    if (!navLinks || !menuBtn) return;

    navLinks.classList.remove("show");

    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-label", "Open menu");

});


});

/* ========================================
3. TYPING ANIMATION
======================================== */

const typingText =
document.getElementById("typing-text");

const roles = [
"Full Stack Developer",
"JavaScript Developer",
"Software Developer",
"AI Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {


if (!typingText) return;

const currentRole = roles[roleIndex];

if (!isDeleting) {

    typingText.textContent =
        currentRole.substring(
            0,
            characterIndex + 1
        );

    characterIndex++;

    if (characterIndex === currentRole.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1800);

        return;
    }

} else {

    typingText.textContent =
        currentRole.substring(
            0,
            characterIndex - 1
        );

    characterIndex--;

    if (characterIndex === 0) {

        isDeleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

    }

}

const speed = isDeleting ? 50 : 90;

setTimeout(typeEffect, speed);

}

/* Start typing animation */

if (typingText) {
typeEffect();
}

/* ========================================
4. ACTIVE NAVIGATION
======================================== */

const sections =
document.querySelectorAll("section");

function updateActiveNavigation() {

let currentSection = "";

sections.forEach((section) => {

    const sectionTop =
        section.offsetTop;

    const sectionHeight =
        section.offsetHeight;

    if (
        window.scrollY >= sectionTop - 200 &&
        window.scrollY < sectionTop + sectionHeight
    ) {

        currentSection =
            section.getAttribute("id");

    }

});

navigationLinks.forEach((link) => {

    link.classList.remove("active");

    const linkTarget =
        link.getAttribute("href");

    if (
        linkTarget === `#${currentSection}`
    ) {

        link.classList.add("active");

    }

});


}

/* Scroll listener */

window.addEventListener(
"scroll",
updateActiveNavigation
);

/* Run once on page load */

updateActiveNavigation();

/* ========================================
5. RESPONSIVE NAVIGATION
======================================== */

window.addEventListener("resize", () => {

if (
    window.innerWidth > 768 &&
    navLinks &&
    menuBtn
) {

    navLinks.classList.remove("show");

    menuBtn.textContent = "☰";

    menuBtn.setAttribute(
        "aria-label",
        "Open menu"
    );

}


});

/* ========================================
6. BUTTON HOVER EFFECT
======================================== */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach((button) => {

button.addEventListener("mouseenter", () => {

    button.style.transform =
        "translateY(-3px)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform =
        "translateY(0)";

});


});

/* ========================================
7. SECTION SCROLL REVEAL
======================================== */

const revealSections =
document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealSections.forEach((section) => {

    revealObserver.observe(section);

});


} else {


/* Fallback for older browsers */

revealSections.forEach((section) => {

    section.classList.add("visible");

});


}

/* ========================================
8. CARD SCROLL REVEAL
======================================== */

const animatedElements =
document.querySelectorAll(
".project-card, " +
".skill-card, " +
".certificate-card, " +
".info-card, " +
".education-item"
);

if ("IntersectionObserver" in window) {

const animationObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "animate-in"
                    );

                    animationObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );


animatedElements.forEach((element) => {

    element.classList.add(
        "animate-ready"
    );

    animationObserver.observe(element);

});

} else {

animatedElements.forEach((element) => {

    element.classList.add("animate-in");

});


}

/* ========================================
9. PROJECT CARD TILT EFFECT
======================================== */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

card.addEventListener("mousemove", (event) => {

    /* Disable on smaller screens */

    if (window.innerWidth < 900) {
        return;
    }

    const rect =
        card.getBoundingClientRect();

    const x =
        event.clientX - rect.left;

    const y =
        event.clientY - rect.top;

    const centerX =
        rect.width / 2;

    const centerY =
        rect.height / 2;

    const rotateX =
        ((y - centerY) / centerY) * -2;

    const rotateY =
        ((x - centerX) / centerX) * 2;

    card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-8px)`;

});


card.addEventListener("mouseleave", () => {

    card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

});


});

/* ========================================
10. CODE CARD 3D EFFECT
======================================== */

const codeCard =
document.querySelector(".code-card");

if (codeCard) {

codeCard.addEventListener(
    "mousemove",
    (event) => {

        /* Disable on smaller screens */

        if (window.innerWidth < 900) {
            return;
        }

        const rect =
            codeCard.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        codeCard.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    }
);


codeCard.addEventListener(
    "mouseleave",
    () => {

        codeCard.style.transform =
            "perspective(1000px) rotateY(-5deg)";

    }
);


}

/* ========================================
11. SMOOTH SCROLL
======================================== */

navigationLinks.forEach((link) => {

link.addEventListener("click", (event) => {

    const targetId =
        link.getAttribute("href");

    /* Ignore external links */

    if (
        !targetId ||
        !targetId.startsWith("#")
    ) {
        return;
    }

    const target =
        document.querySelector(targetId);

    if (target) {

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});


});

/* ========================================
12. CONSOLE MESSAGE
======================================== */

console.log(
"🚀 Welcome to Sheezan's Portfolio!"
);

console.log(
"💻 Built with HTML, CSS and JavaScript."
);

console.log(
"✨ Portfolio animations initialized."
);

/* ========================================
END OF SCRIPT
======================================== */
