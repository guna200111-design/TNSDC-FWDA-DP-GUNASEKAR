// Contact form submission simulation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent successfully, dattebayo! 🚀");
  this.reset();
});