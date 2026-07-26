// ==========================================================
// SHARED: motion / input capability checks
// ==========================================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

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
// SCROLL REVEAL: staggered blur/fade as sections enter view.
// JS discovers and tags targets (rather than authoring
// data-reveal in HTML) so content still renders if JS fails.
// ==========================================================
const revealGroups = [
  '.problem__flows > .problem-flow',
  '.bento > .bento-card, .bento--demos > .demo-card',
  '.work .project',
  '.testimonial',
  '.behind .system-flow__step',
  '.process__list > .process__item',
  '.about__inner, .about__card',
  '.contact__card',
];

const revealTargets = [];
revealGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.setAttribute('data-reveal', '');
    el.style.setProperty('--i', i);
    revealTargets.push(el);
  });
});

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
// SPOTLIGHT: subtle cursor-following glow (desktop, motion-safe only)
// ==========================================================
const spotlight = document.getElementById('spotlight');
if (spotlight && hasFinePointer && !prefersReducedMotion) {
  let rafId = null;
  window.addEventListener('mousemove', (e) => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      spotlight.style.setProperty('--spot-x', `${e.clientX}px`);
      spotlight.style.setProperty('--spot-y', `${e.clientY}px`);
      spotlight.classList.add('is-active');
      rafId = null;
    });
  });
}

// ==========================================================
// MAGNETIC BUTTONS: buttons drift slightly toward the cursor
// (desktop, motion-safe only)
// ==========================================================
if (hasFinePointer && !prefersReducedMotion) {
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.25}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
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
      nav.style.borderBottomColor = 'rgba(255,255,255,0.07)';
    }
  });
}
