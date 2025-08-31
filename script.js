// script.js

// Simple welcome message in console
console.log("Welcome to my portfolio website!");

// Interactive feature: Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Show a greeting alert after 2 seconds
setTimeout(() => {
  alert("Hi there! 👋 Welcome to my portfolio.");
}, 2000);
