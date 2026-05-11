// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.2, rootMargin: '-10% 0px' });

  sections.forEach(section => observer.observe(section));
}

// Fade-in on scroll for sections
const fadeEls = document.querySelectorAll('.stat-card, .skill-pill, .project-card, .exp-item');

if (fadeEls.length) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    fadeEls.forEach(el => el.classList.add('visible'));
  } else {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => fadeObserver.observe(el));
  }
}