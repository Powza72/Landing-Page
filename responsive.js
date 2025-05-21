// Mobile menu functionality
      const menuBtn = document.getElementById("menuBtn");
      const closeBtn = document.getElementById("closeBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      const mobileLinks = mobileMenu.querySelectorAll("a");

      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("-translate-x-full");
        mobileMenu.classList.add("translate-x-0");
      });

      closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("-translate-x-full");
      });

      // Close mobile menu when a link is clicked
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("translate-x-0");
          mobileMenu.classList.add("-translate-x-full");
        });
      });

      // Typing animation for the developer text
      document.addEventListener("DOMContentLoaded", function () {
        const developerText = document.getElementById("developer");
        developerText.textContent = "Full-Stack Developer";

        // Initialize AOS
        AOS.init({
          duration: 1000,
          once: false,
          mirror: true,
          easing: "ease-in-out",
          offset: 120,
        });
      });