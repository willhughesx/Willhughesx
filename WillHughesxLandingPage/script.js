// ==========================================================
// NAV: mobile menu toggle
// ==========================================================
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after clicking a link
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================================
// FAQ: accordion behaviour
// ==========================================================
document.querySelectorAll('.faq-item__q').forEach((btn) => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    // Close all other FAQ items (single-open accordion)
    document.querySelectorAll('.faq-item__q').forEach((other) => {
      other.setAttribute('aria-expanded', 'false');
    });

    btn.setAttribute('aria-expanded', String(!isOpen));
  });
});

// ==========================================================
// SCROLL REVEAL: fade/slide sections in as they enter view
// ==========================================================
const revealTargets = document.querySelectorAll(
  '.work .project, .testimonial__inner, .services__grid, .process__item, .automation__inner, .faq-item, .contact__inner'
);

revealTargets.forEach((el) => el.setAttribute('data-reveal', ''));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything if IntersectionObserver isn't supported
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// ==========================================================
// FOOTER: current year
// ==========================================================
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ==========================================================
// NAV: shrink/hide-on-scroll style border intensity (subtle)
// ==========================================================
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 8) {
      nav.style.borderBottomColor = 'rgba(255,255,255,0.14)';
    } else {
      nav.style.borderBottomColor = 'rgba(255,255,255,0.08)';
    }
  });
}
