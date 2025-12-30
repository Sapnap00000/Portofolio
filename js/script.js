// ================================
// CUSTOM JAVASCRIPT FOR PORTFOLIO
// ================================

document.addEventListener("DOMContentLoaded", function () {
  // Initialize features
  initNavigation();
  initScrollEffects();
  initContactLinks();
  initParticles();
  initCardInteractions();
  initAwardSystem();
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

/* ================================
   AWARD SYSTEM (ONE-TIME VALIDATION)
   ================================ */
function initAwardSystem() {
  const awardBtn = document.getElementById("awardBtn");
  const awardCountEl = document.querySelector(".award-count");

  if (!awardBtn || !awardCountEl) return;

  // Load award status from localStorage
  const isAwarded = localStorage.getItem("portfolio-awarded");
  const awardCount =
    parseInt(localStorage.getItem("portfolio-award-count")) || 0;

  // Display current count
  awardCountEl.textContent = awardCount;

  // If already awarded, disable button
  if (isAwarded) {
    awardBtn.classList.add("awarded");
    awardBtn.disabled = true;
    awardBtn.innerHTML =
      '<i class="fas fa-check-circle"></i> You\'ve Awarded This';
  }

  awardBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Check if already awarded
    if (localStorage.getItem("portfolio-awarded")) {
      alert("You have already awarded this portfolio once!");
      return;
    }

    // Mark as awarded
    localStorage.setItem("portfolio-awarded", "true");

    // Increment and save award count
    const currentCount =
      parseInt(localStorage.getItem("portfolio-award-count")) || 0;
    const newCount = currentCount + 1;
    localStorage.setItem("portfolio-award-count", newCount);

    // Update UI
    awardCountEl.textContent = newCount;
    awardBtn.classList.add("awarded");
    awardBtn.disabled = true;
    awardBtn.innerHTML =
      '<i class="fas fa-check-circle"></i> You\'ve Awarded This';

    // Show celebration feedback
    showCelebration();
  });
}

/**
 * Show celebration animation feedback
 */
function showCelebration() {
  const celebration = document.createElement("div");
  celebration.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    z-index: 9999;
    pointer-events: none;
    animation: pop 0.8s ease-out forwards;
  `;
  celebration.textContent = "✨ Thank You! ✨";

  document.body.appendChild(celebration);
  setTimeout(() => celebration.remove(), 800);
}

/* ================================
   PARTICLES BACKGROUND (CANVAS)
   Lightweight particle system tuned for performance
   ================================ */
function initParticles() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w = (canvas.width = innerWidth);
  let h = (canvas.height = innerHeight);
  const particles = [];
  const count = Math.max(20, Math.floor((w * h) / 90000));

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticles() {
    particles.length = 0;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: rand(0, w),
        y: rand(0, h),
        r: rand(0.8, 2.8),
        vx: rand(-0.15, 0.15),
        vy: rand(-0.05, 0.05),
        alpha: rand(0.04, 0.18),
      });
    }
  }

  function resize() {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
    createParticles();
  }

  window.addEventListener("resize", resize);
  createParticles();

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const cs = getComputedStyle(document.documentElement);
    const color = cs.getPropertyValue("--primary-color") || "#00ff88";

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 12);
      g.addColorStop(0, `${color}10`);
      g.addColorStop(0.6, `${color}05`);
      g.addColorStop(1, "transparent");

      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  draw();
}

/* ================================
   CARD TILT & MODAL INTERACTIONS
   ================================ */
function initCardInteractions() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rx = (-dy * 6).toFixed(2);
      const ry = (dx * 8).toFixed(2);
      card.style.transform = `translateZ(0) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      card.classList.add("tilt");
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.classList.remove("tilt");
    });

    // Open modal on click and populate content
    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.innerText || "Project";
      const img = card.querySelector("img")?.getAttribute("src") || "";
      const desc = card.querySelector("p")?.innerText || "";

      const modalEl = document.getElementById("projectModal");
      if (modalEl) {
        const label = modalEl.querySelector("#projectModalLabel");
        const mimg = modalEl.querySelector("#projectModalImage");
        const mdesc = modalEl.querySelector("#projectModalDesc");
        if (label) label.innerText = title;
        if (mimg) mimg.setAttribute("src", img);
        if (mdesc) mdesc.innerText = desc;
        const bsModal = new bootstrap.Modal(modalEl);
        bsModal.show();
      }
    });
  });
}
