// ===============================
// PROJECT DATA
// ===============================
const projectsData = [
  {
    title: "Student Affairs Merit System",
    category: "systems",
    image: "Proj/proj1.png",
    description: "A web-based platform for CEU Manila that streamlines student activity tracking and automates merit point computation.",
    features: [
      "Centralized student activity tracking with automated merit point calculation",
      "Personalized student merit dashboard with automated notifications",
      "Admin tools for activity management and secure role-based access control"
    ],
    languages: ["HTML", "CSS", "Bootstrap", "React", "node.js", "MongoDB"]
  },

  {
    title: "VerdixaChatBot",
    category: "systems",
    image: "Proj/Proj5.png",
    description: "An AI-powered diet chatbot system designed to help users achieve their health goals through personalized nutrition guidance, meal recommendations, and real-time chat support.",
    features: [
      "AI-powered chatbot for personalized diet and nutrition advice",
      "Secure user authentication with real-time chat and conversation history",
      "Admin dashboard for managing users, chatbot content, and unanswered questions"
    ],
    languages: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
  },


  {
    title: "BarangayCare",
    category: "systems",
    image: "Proj/Proj6.png",
    description: "A cloud-powered community health center management system that streamlines resident health profiling, appointment bookings, immunization schedules, and pharmaceutical inventory with real-time analytics.",
    features: [
      "Patient Profiling & Medical History with demographic search and Purok zone filtering",
      "Immunization & Medicine Inventory Tracking with alerts for due dates, low stock, and expired items",
      "Health Analytics & Reports with interactive charts and PDF document export"
    ],
    languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "Firebase Firestore", "Chart.js", "jsPDF"]
  },


  {
    title: "PowerHub E-Commerce Platform",
    category: "systems",
    image: "Proj/Proj3.png",
    description: "PowerHub is an e-commerce platform for browsing and purchasing technology products. Users can manage carts and transactions, while admins manage the product catalog.",
    features: [
      "Browse and purchase technology-related products",
      "Add items to cart and view real-time purchase totals",
      "Admin panel for managing products (add, delete, update prices)",
    ],
    languages: ["MS Access"]
  },

  {
    title: "Human Food & Water Dispenser",
    category: "systems",
    image: "Proj/Proj2.png",
    description: "An automated robotics system designed to dispense food and water in a hygienic, touchless, and user-friendly manner for public spaces, schools, and hospitals.",
    features: [
      "Automated food and water dispensing system",
      "Touchless detection using ultrasonic sensors",
      "Servo motor–controlled dispensing mechanism",
      "Hygienic and safe operation for public spaces",
      "Efficient hardware design that minimizes waste"
    ],
    languages: ["Arduino (C/C++)", "Sensors", "Servo Motor"]
  },


  {
    title: "JPCS 2025–2026 Official Magazine",
    category: "creative",
    image: "Proj/D 1.png",
    description: "Designed and produced the official annual magazine of the Junior Philippine Computer Society (JPCS) at Centro Escolar University. Features organizational achievements, executive officers, member contributions, and academic highlights.",
    features: [
      "Designed complete editorial magazine layout from concept to print",
      "Created event highlights, officer spreads, and feature pages",
      "Applied modern typography and professional grid systems",

    ],
    languages: ["Canva", "Magazine Layout",]
  },

  {
    title: "Graduation Batch 2026 Magazine",
    category: "creative",
    image: "Proj/D 2.png",
    description: "Full editorial magazine layout and souvenir publication designed for the Technology Batch 2026 graduating class at Centro Escolar University.",
    features: [
      "Full editorial magazine layout for graduating batch",
      "Student profile spreads, memories, and batch highlights",
      "Modern typography and grid-based layout system",
      "High-resolution print-ready output",
    ],
    languages: ["Canva", "Magazine Layout"]
  },

];


// ===============================
// SMOOTH SCROLL
// ===============================
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href.trim().length <= 1) return;
      try {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navHeight = document.querySelector('nav')?.offsetHeight || 68;
          const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
          window.scrollTo({ top: targetTop, behavior: 'smooth' });
        }
      } catch (err) {
        // ignore invalid selectors
      }
    });
  });
}

// ===============================
// RIPPLE EFFECT
// ===============================
function createRipple(event, element) {
  const ripple = document.createElement('span');
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  ripple.style.cssText = `
    width: ${size}px; height: ${size}px;
    left: ${x}px; top: ${y}px;
    position: absolute; border-radius: 50%;
    background: rgba(37,99,235,0.2);
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  `;
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(rippleStyle);

// ===============================
// MOBILE MENU
// ===============================
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => navMenu.classList.toggle('active'));
document.querySelectorAll('#nav-menu a').forEach(link =>
  link.addEventListener('click', () => navMenu.classList.remove('active'))
);

// ===============================
// THEME TOGGLE
// ===============================
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  const themeIcon = themeToggleBtn.querySelector('i');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');

    if (isLight) {
      localStorage.setItem('theme', 'light');
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
      localStorage.setItem('theme', 'dark');
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    // Re-initialize stars when theme changes
    if (typeof initCanvas === 'function') {
      initCanvas();
    }
  });
}

// ===============================
// NAVBAR SCROLL & ACTIVE LINK
// ===============================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);

  let current = '';
  document.querySelectorAll('section').forEach(section => {
    if (window.scrollY >= section.offsetTop - 160) current = section.id;
  });

  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      const linkText = link.textContent.trim().toLowerCase();
      if (href === '#about' && linkText === 'career') {
        link.classList.toggle('active', current === 'experience');
      } else if (href === '#about' && linkText === 'about') {
        link.classList.toggle('active', current === 'about');
      } else {
        link.classList.toggle('active', href === `#${current}`);
      }
    }
  });
});

// ===============================
// CV POPUP
// ===============================
const cvLink = document.getElementById('cv-link');
const cvPopup = document.querySelector('.cv-popup');

if (cvLink && cvPopup) {
  cvLink.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    cvPopup.classList.toggle('active');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.cv-dropdown')) cvPopup.classList.remove('active');
  });
}

// ===============================
// SECTION OVERLAYS (Projects / Certificates)
// ===============================
function openOverlay(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('overlay-open');
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;
}

function closeOverlay(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  const activeOtherOverlay = document.querySelector('.section-overlay.active:not(#' + id + ')');
  const activeModal = document.getElementById('projectModal')?.classList.contains('active');
  if (!activeOtherOverlay && !activeModal) {
    document.body.classList.remove('overlay-open');
    document.body.style.overflow = '';
  }
}

// Nav links
const projNavLink = document.getElementById('projects-nav-link');
const certNavLink = document.getElementById('certificates-nav-link');
const viewWorkBtn = document.getElementById('view-work-btn');

if (projNavLink) {
  projNavLink.addEventListener('click', e => {
    e.preventDefault();
    openOverlay('projectsOverlay');
  });
}
if (certNavLink) {
  certNavLink.addEventListener('click', e => {
    e.preventDefault();
    openOverlay('certificatesOverlay');
  });
}
if (viewWorkBtn) {
  viewWorkBtn.addEventListener('click', e => {
    e.preventDefault();
    openOverlay('projectsOverlay');
  });
}

// Close buttons
document.getElementById('projects-overlay-close')?.addEventListener('click', () => closeOverlay('projectsOverlay'));
document.getElementById('certificates-overlay-close')?.addEventListener('click', () => closeOverlay('certificatesOverlay'));

// Backdrop click closes the overlay
['projectsOverlay', 'certificatesOverlay'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', e => {
      if (e.target === el) closeOverlay(id);
    });
  }
});

// Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeOverlay('projectsOverlay');
    closeOverlay('certificatesOverlay');
  }
});

// ===============================
// PROJECT FILTER TABS
// ===============================
document.querySelectorAll('.proj-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.proj-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.proj-category-block').forEach(block => {
      const category = block.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        block.style.display = 'block';
        block.style.opacity = '0';
        block.style.transform = 'translateY(10px)';
        setTimeout(() => {
          block.style.transition = 'all 0.35s ease';
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        }, 30);
      } else {
        block.style.display = 'none';
      }
    });
  });
});

// ===============================
// CERTIFICATE FILTER TABS
// ===============================
document.querySelectorAll('.cert-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-cert-filter');
    document.querySelectorAll('.cert-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.cert-category-block').forEach(block => {
      const category = block.getAttribute('data-cert-category');
      if (filter === 'all' || category === filter) {
        block.style.display = 'block';
        block.style.opacity = '0';
        block.style.transform = 'translateY(10px)';
        setTimeout(() => {
          block.style.transition = 'all 0.35s ease';
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        }, 30);
      } else {
        block.style.display = 'none';
      }
    });
  });
});

// ===============================
// SKILLS FILTER TABS
// ===============================
document.querySelectorAll('.skills-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-skill-filter');
    document.querySelectorAll('.skills-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.skills-category-block').forEach(block => {
      const category = block.getAttribute('data-skill-category');
      if (filter === 'all' || category === filter) {
        block.style.display = 'block';
        block.style.opacity = '0';
        block.style.transform = 'translateY(10px)';
        setTimeout(() => {
          block.style.transition = 'all 0.35s ease';
          block.style.opacity = '1';
          block.style.transform = 'translateY(0)';
        }, 30);
      } else {
        block.style.display = 'none';
      }
    });
  });
});

// ===============================
// STAR CANVAS — Black background with glowing stars
// ===============================
const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');
let stars = [];
let shootingStars = [];
let animFrameId;

// Star color palette — white, blue-white, gold, soft purple
const STAR_COLORS = [
  { r: 255, g: 255, b: 255 },  // pure white
  { r: 200, g: 220, b: 255 },  // blue-white
  { r: 255, g: 240, b: 200 },  // warm gold
  { r: 180, g: 200, b: 255 },  // sky blue
  { r: 230, g: 210, b: 255 },  // soft lavender
];

const STAR_COLORS_LIGHT = [
  { r: 20, g: 20, b: 20 },
  { r: 40, g: 40, b: 40 },
  { r: 60, g: 60, b: 60 },
  { r: 15, g: 15, b: 25 },
];

function randBetween(a, b) { return a + Math.random() * (b - a); }

function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const isLight = document.body.classList.contains('light-mode');
  const colors = isLight ? STAR_COLORS_LIGHT : STAR_COLORS;

  // Create stars with twinkling
  stars = Array.from({ length: 160 }, () => {
    const col = colors[Math.floor(Math.random() * colors.length)];
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseR: randBetween(0.3, 1.8),
      r: 0,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      col,
      // twinkle
      twinkleSpeed: randBetween(0.008, 0.025),
      twinklePhase: Math.random() * Math.PI * 2,
      // glow for bigger stars
      glow: Math.random() > 0.82,
    };
  });

  shootingStars = [];
}

// Spawn a shooting star randomly
function spawnShootingStar() {
  const angle = randBetween(20, 50) * (Math.PI / 180); // diagonal downward
  const speed = randBetween(8, 18);
  shootingStars.push({
    x: randBetween(0, canvas.width * 0.8),
    y: randBetween(0, canvas.height * 0.4),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    length: randBetween(80, 200),
    alpha: 1,
    fade: randBetween(0.012, 0.025),
    width: randBetween(0.8, 2),
  });
}

// Launch shooting stars periodically
setInterval(() => {
  if (Math.random() < 0.7) spawnShootingStar();
}, 2200);

let tick = 0;

function animateStars() {
  animFrameId = requestAnimationFrame(animateStars);
  tick++;

  const isLight = document.body.classList.contains('light-mode');

  // Background
  ctx.fillStyle = isLight ? '#e5e7eb' : '#05080F';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ---- Draw stars ----
  stars.forEach((star, i) => {
    // Twinkling
    const twinkle = 0.55 + 0.45 * Math.sin(tick * star.twinkleSpeed + star.twinklePhase);
    star.r = star.baseR * twinkle;
    const alpha = 0.5 + 0.5 * twinkle;

    const { r, g, b } = star.col;

    // Glow effect for bigger stars
    if (star.glow && star.baseR > 1.0) {
      const glowRadius = star.r * 4;
      const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, glowRadius);
      gradient.addColorStop(0, `rgba(${r},${g},${b},${(alpha * 0.35).toFixed(2)})`);
      gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.beginPath();
      ctx.arc(star.x, star.y, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // Star dot
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(2)})`;
    ctx.fill();
    ctx.closePath();

    // Move
    star.x += star.vx;
    star.y += star.vy;
    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;

    // Connecting lines (nearby stars only)
    for (let j = i + 1; j < stars.length; j++) {
      const o = stars[j];
      const dx = star.x - o.x;
      const dy = star.y - o.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const lineAlpha = (1 - dist / 100) * 0.18;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(o.x, o.y);
        ctx.strokeStyle = isLight
          ? `rgba(0,0,0,${lineAlpha.toFixed(3)})`
          : `rgba(160,190,255,${lineAlpha.toFixed(3)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.closePath();
      }
    }
  });

  // ---- Draw shooting stars ----
  shootingStars = shootingStars.filter(s => s.alpha > 0);
  shootingStars.forEach(s => {
    const tailX = s.x - s.vx * (s.length / Math.sqrt(s.vx * s.vx + s.vy * s.vy));
    const tailY = s.y - s.vy * (s.length / Math.sqrt(s.vx * s.vx + s.vy * s.vy));

    const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
    grad.addColorStop(0, `rgba(${isLight ? '0,0,0' : '255,255,255'},0)`);
    grad.addColorStop(0.7, isLight ? `rgba(50,50,50,${(s.alpha * 0.6).toFixed(2)})` : `rgba(200,220,255,${(s.alpha * 0.6).toFixed(2)})`);
    grad.addColorStop(1, `rgba(${isLight ? '0,0,0' : '255,255,255'},${s.alpha.toFixed(2)})`);

    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(s.x, s.y);
    ctx.strokeStyle = grad;
    ctx.lineWidth = s.width;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.closePath();

    // Bright head
    const headGrad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 4);
    headGrad.addColorStop(0, `rgba(${isLight ? '0,0,0' : '255,255,255'},${s.alpha.toFixed(2)})`);
    headGrad.addColorStop(1, `rgba(${isLight ? '0,0,0' : '255,255,255'},0)`);
    ctx.beginPath();
    ctx.arc(s.x, s.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = headGrad;
    ctx.fill();

    s.x += s.vx;
    s.y += s.vy;
    s.alpha -= s.fade;
  });
}

window.addEventListener('resize', () => {
  cancelAnimationFrame(animFrameId);
  initCanvas();
  animateStars();
});

initCanvas();
animateStars();

// ===============================
// SECTION ANIMATIONS (IntersectionObserver)
// ===============================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// ===============================
// PROJECT MODAL
// ===============================
function openProjectModal(index) {
  const project = projectsData[index];
  if (!project) return;

  const imgEl = document.getElementById('modalImagePreview');
  const leftPanel = document.getElementById('modalLeft');
  if (imgEl && project.image) {
    imgEl.src = project.image;
    imgEl.style.display = 'block';
    if (leftPanel) leftPanel.style.display = 'block';
  } else if (imgEl) {
    imgEl.style.display = 'none';
    if (leftPanel) leftPanel.style.display = 'none';
  }

  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.description;

  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = '';
  project.features.forEach((feature, i) => {
    const li = document.createElement('li');
    li.textContent = feature;
    li.style.opacity = '0';
    li.style.transform = 'translateX(-16px)';
    featuresList.appendChild(li);
    setTimeout(() => {
      li.style.transition = 'all 0.35s ease';
      li.style.opacity = '1';
      li.style.transform = 'translateX(0)';
    }, 80 + i * 60);
  });

  const tagsList = document.getElementById('modalTags');
  tagsList.innerHTML = '';
  project.languages.forEach((lang, i) => {
    const span = document.createElement('span');
    span.textContent = lang;
    span.style.opacity = '0';
    span.style.transform = 'scale(0.8)';
    tagsList.appendChild(span);
    setTimeout(() => {
      span.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
      span.style.opacity = '1';
      span.style.transform = 'scale(1)';
    }, 240 + i * 50);
  });

  const modal = document.getElementById('projectModal');
  modal.style.display = 'flex';
  void modal.offsetWidth;
  modal.classList.add('active');
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';

  // Prevent background overlay from scrolling behind the modal
  const activeOverlay = document.querySelector('.section-overlay.active');
  if (activeOverlay) {
    activeOverlay.style.overflow = 'hidden';
  }

  // Always scroll modal content back to top on open
  const mc = modal.querySelector('.modal-content');
  const mr = modal.querySelector('.modal-right');
  if (mc) mc.scrollTop = 0;
  if (mr) mr.scrollTop = 0;
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  const content = modal.querySelector('.modal-content');
  if (content) content.style.animation = 'modalSlideOut 0.3s ease forwards';
  modal.classList.remove('active');

  // Restore parent overlay scrolling if active
  const activeOverlay = document.querySelector('.section-overlay.active');
  if (activeOverlay) {
    activeOverlay.style.overflow = 'auto';
  }

  setTimeout(() => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
    if (!document.querySelector('.section-overlay.active')) {
      document.body.style.overflow = '';
    }
    if (content) content.style.animation = '';
  }, 300);
}

// Close modal on backdrop click / Escape key
document.getElementById('projectModal').addEventListener('click', e => {
  if (e.target === document.getElementById('projectModal')) closeProjectModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProjectModal();
});

// ===============================
// ===============================
// CERTIFICATE MODAL
// ===============================
const certModal = document.getElementById('certificateModal');
const certModalImg = document.getElementById('modalImage');
const certModalClose = document.querySelector('.modal-close');

document.querySelectorAll('.cert-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (!img) return;
    if (certModalImg) {
      certModalImg.src = img.src;
      certModalImg.classList.remove('zoomed');
    }
    if (certModal) {
      certModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

if (certModalClose && certModal) {
  certModalClose.addEventListener('click', () => {
    certModal.classList.remove('active');
    document.body.style.overflow = '';
  });
}

if (certModal) {
  certModal.addEventListener('click', e => {
    if (e.target === certModal) {
      certModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

if (certModalImg) {
  certModalImg.addEventListener('click', () => {
    certModalImg.classList.toggle('zoomed');
  });
}

// ===============================
// SUMMARY POPUP
// ===============================
const summaryLink = document.getElementById("summary-link");
const summaryPopup = document.getElementById("summary-popup");
const summaryClose = document.getElementById("summary-close");

if (summaryLink && summaryPopup) {
  summaryLink.addEventListener("click", (e) => {
    e.preventDefault();
    summaryPopup.style.display = "flex";
  });
}

if (summaryClose && summaryPopup) {
  summaryClose.addEventListener("click", () => {
    summaryPopup.style.display = "none";
  });
}

if (summaryPopup) {
  window.addEventListener("click", (e) => {
    if (e.target === summaryPopup) {
      summaryPopup.style.display = "none";
    }
  });
}

// ===============================
// SMOOTH SCROLL INIT
// ===============================
smoothScroll();

// ============================================
// FLYING EMAIL ANIMATION FOR CONTACT FORM
// ============================================
const contactForm = document.getElementById('contactForm');
const contactEmailItem = document.getElementById('contactEmailItem');
const contactSubmitBtn = document.getElementById('contactSubmitBtn');
const contactFormStatus = document.getElementById('contactFormStatus');
const submitBtnIcon = document.getElementById('submitBtnIcon');
const submitBtnText = document.getElementById('submitBtnText');

if (contactForm && contactSubmitBtn) {
  contactSubmitBtn.addEventListener('click', function () {
    // Manual HTML5 validation since button type is "button" (no native submit)
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    // Reset status message
    if (contactFormStatus) {
      contactFormStatus.className = 'contact-status-msg';
      contactFormStatus.style.display = 'none';
    }

    // Button loading state
    if (submitBtnIcon) submitBtnIcon.className = 'fas fa-paper-plane fa-spin';
    if (submitBtnText) submitBtnText.textContent = 'Launching Email...';
    if (contactSubmitBtn) contactSubmitBtn.disabled = true;

    // Get positions for flying animation
    const btnRect = contactSubmitBtn ? contactSubmitBtn.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
    const emailRect = contactEmailItem ? contactEmailItem.getBoundingClientRect() : { left: 100, top: 100, width: 0, height: 0 };

    const startX = btnRect.left + btnRect.width / 2 - 25;
    const startY = btnRect.top + btnRect.height / 2 - 25;
    const endX = emailRect.left + emailRect.width / 2 - 25;
    const endY = emailRect.top + emailRect.height / 2 - 25;

    // Create flying paper airplane element
    const flyer = document.createElement('div');
    flyer.className = 'flying-email-anim';
    flyer.innerHTML = '<i class="fas fa-paper-plane"></i>';
    flyer.style.left = startX + 'px';
    flyer.style.top = startY + 'px';
    document.body.appendChild(flyer);

    // Animate along a curved arc
    const duration = 1200; // 1.2s flight
    const startTime = performance.now();

    // Emit sparkle particles
    const particleInterval = setInterval(() => {
      const flyRect = flyer.getBoundingClientRect();
      const p = document.createElement('div');
      p.className = 'email-sparkle-trail';
      p.style.left = (flyRect.left + 20 + (Math.random() * 10 - 5)) + 'px';
      p.style.top = (flyRect.top + 20 + (Math.random() * 10 - 5)) + 'px';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 800);
    }, 40);

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      // Curved Arc Path
      const currentX = startX + (endX - startX) * ease;
      // Arc peak in the middle
      const arcHeight = -90 * Math.sin(progress * Math.PI);
      const currentY = startY + (endY - startY) * ease + arcHeight;

      // Rotation heading angle towards target
      const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI) - 45;
      const scale = 1 + 0.3 * Math.sin(progress * Math.PI);

      flyer.style.transform = `translate3d(${currentX - startX}px, ${currentY - startY}px, 0) scale(${scale}) rotate(${angle}deg)`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        clearInterval(particleInterval);
        flyer.remove();

        // Target Email Received Glow Pulse
        if (contactEmailItem) {
          contactEmailItem.classList.remove('received-pulse');
          void contactEmailItem.offsetWidth;
          contactEmailItem.classList.add('received-pulse');
        }

        // Show Success Feedback
        if (contactFormStatus) {
          contactFormStatus.className = 'contact-status-msg success';
          contactFormStatus.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent! Flying to <strong>nathdreiwork@gmail.com</strong>';
        }

        // Reset Button
        if (submitBtnIcon) submitBtnIcon.className = 'fas fa-check';
        if (submitBtnText) submitBtnText.textContent = 'Sent Successfully!';
        if (contactSubmitBtn) contactSubmitBtn.disabled = false;

        // Capture form values BEFORE reset
        const nameVal = document.getElementById('contactName')?.value || '';
        const emailVal = document.getElementById('contactEmail')?.value || '';
        const msgVal = document.getElementById('contactMessage')?.value || '';

        fetch('https://formsubmit.co/ajax/nathdreiwork@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: nameVal,
            email: emailVal,
            message: msgVal,
            _captcha: 'false'
          })
        })
          .then(res => res.json())
          .then(data => {
            console.log('FormSubmit response:', data);
          })
          .catch(err => {
            console.error('Fetch error:', err);
          });

        // Reset form inputs after 3 seconds
        setTimeout(() => {
          contactForm.reset();
          if (submitBtnIcon) submitBtnIcon.className = 'fas fa-paper-plane';
          if (submitBtnText) submitBtnText.textContent = 'Send Message';
        }, 3000);
      }
    }

    requestAnimationFrame(step);
  });
}


