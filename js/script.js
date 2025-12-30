// ================================
// CUSTOM JAVASCRIPT FOR PORTFOLIO
// ================================

document.addEventListener("DOMContentLoaded", function () {
  // Initialize features
  initNavigation();
  initScrollEffects();
  initContactLinks();
});

/**
 * Initialize navigation smooth scrolling
 */
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only prevent default for anchor links
      if (href.startsWith("#")) {
        e.preventDefault();

        // Remove active class from all links
        navLinks.forEach((nav) => nav.classList.remove("active"));

        // Add active class to clicked link
        this.classList.add("active");

        // Scroll to section
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
}

/**
 * Add scroll effects to elements
 */
function initScrollEffects() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.6s ease-out forwards";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe all project cards and sections
  const elements = document.querySelectorAll(
    ".project-card, .about-content, .contact-content"
  );
  elements.forEach((element) => {
    observer.observe(element);
  });
}

/**
 * Handle contact links with validation
 */
function initContactLinks() {
  const emailLink = document.querySelector('a[href^="mailto:"]');

  if (emailLink) {
    emailLink.addEventListener("click", function (e) {
      // Check if email is valid format
      const email = this.getAttribute("href").replace("mailto:", "");
      if (!isValidEmail(email)) {
        e.preventDefault();
        alert("Email address is invalid");
      }
    });
  }
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Log portfolio loaded message
 */
console.log("Welcome to Jay Portfolio! 👋");
console.log("Thank you for visiting my portfolio.");
