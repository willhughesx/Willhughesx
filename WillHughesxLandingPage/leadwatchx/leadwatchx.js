// ==========================================================
// LEADWATCHX — lightweight view switcher.
// This is a static mockup: only two views exist (Overview and
// the Apex Roofing detail view). No routing, no state beyond
// which view is currently shown.
// ==========================================================
(function () {
  const overview = document.getElementById('view-overview');
  const detail = document.getElementById('view-detail');

  function showOverview() {
    detail.classList.remove('is-active');
    overview.classList.add('is-active');
    window.scrollTo({ top: 0, behavior: prefersReducedMotionSafe() ? 'auto' : 'smooth' });
  }

  function showDetail() {
    overview.classList.remove('is-active');
    detail.classList.add('is-active');
    window.scrollTo({ top: 0, behavior: prefersReducedMotionSafe() ? 'auto' : 'smooth' });
  }

  function prefersReducedMotionSafe() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  document.querySelectorAll('[data-lwx-open="apex"]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      showDetail();
    });
  });

  document.querySelectorAll('[data-lwx-close]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      showOverview();
    });
  });

  document.querySelectorAll('[data-lwx-nav="overview"]').forEach((el) => {
    el.addEventListener('click', () => {
      if (detail.classList.contains('is-active')) {
        showOverview();
      }
    });
  });
})();
