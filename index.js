// Scroll reveal animation
const animatedElements = document.querySelectorAll(".fade-up");

const showOnScroll = () => {
  animatedElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp settings
const whatsappNumber = "7877554559"; // CHANGE THIS NUMBER

const forms = document.querySelector("form");
const submitBtns = document.getElementById("submitBtn");

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtns.disabled = true;
  submitBtns.textContent = "Sending...";

  const name = forms.name.value.trim();
  const email = forms.email.value.trim();
  const number = forms.Number.value.trim();
  const service = forms.service.value;
  const date = forms.date.value;
  const notes = forms.notes.value.trim();

  if (!name || !email) {
    alert("Please enter your name and email.");
    submitBtns.disabled = false;
    submitBtns.textContent = "Send enquiry";
    return;
  }

  const message = `
*New Makeup Booking* 💄

Name: ${name}
Email: ${email}
Mobile: ${number}
Service: ${service}
Date: ${date || "Not specified"}
Notes: ${notes || "None"}
        `;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");

  submitBtn.disabled = false;
  submitBtn.textContent = "Send enquiry";
  forms.reset();
});
