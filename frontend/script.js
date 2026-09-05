// ==========================================
// EMAILJS INITIALIZATION
// ==========================================

emailjs.init({
  publicKey: "CNSFh8okFlpb9vXrQ",
});

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");

    navToggle.setAttribute("aria-expanded", isOpen);
  });

  const navLinks = siteNav.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");

      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================
// FOOTER YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Show sending message
    if (formStatus) {
      formStatus.textContent = "Sending message...";
      formStatus.className = "form-status";
    }

    // ======================================
    // GET FORM DATA
    // ======================================

    const data = {
      name: document.getElementById("name").value,

      email: document.getElementById("email").value,

      subject: document.getElementById("subject").value,

      message: document.getElementById("message").value,
    };

    try {
      // ==================================
      // 1. SEND THROUGH EMAILJS
      // ==================================

      const serviceID = "service_v4b9bx";
      const templateID = "template_x0sinch";

      await emailjs.sendForm(serviceID, templateID, contactForm);

      // ==================================
      // 2. SEND TO YOUR BACKEND
      // ==================================

      const backendResponse = await fetch("http://localhost:5000/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const backendResult = await backendResponse.json();

      console.log("Backend response:", backendResult);

      // ==================================
      // SUCCESS
      // ==================================

      if (formStatus) {
        formStatus.textContent = "Message sent successfully!";

        formStatus.className = "form-status success";
      }

      // Clear form
      contactForm.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      if (formStatus) {
        formStatus.textContent = "Failed to send message. Please try again.";

        formStatus.className = "form-status error";
      }
    }
  });
}
