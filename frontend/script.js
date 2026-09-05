const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  try {
    // Your existing EmailJS
    const serviceID = "service_v4b9bx";
    const templateID = "template_x0sinch";

    await emailjs.sendForm(serviceID, templateID, contactForm);

    // Backend connection added
    const backendResponse = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const backendResult = await backendResponse.json();

    console.log("Backend:", backendResult);

    formStatus.textContent = "Message sent successfully!";

    contactForm.reset();
  } catch (error) {
    console.error("Error:", error);

    formStatus.textContent = "Failed to send message. Please try again.";
  }
});
