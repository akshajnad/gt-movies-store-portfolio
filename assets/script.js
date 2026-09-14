(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');
  const menuLinks = [...document.querySelectorAll('.nav-links a')];

  const closeMenu = () => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    toggle.querySelector('.sr-only').textContent = 'Open navigation';
  };

  toggle?.addEventListener('click', () => {
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(willOpen));
    menu?.classList.toggle('open', willOpen);
    toggle.querySelector('.sr-only').textContent = willOpen ? 'Close navigation' : 'Open navigation';
  });

  menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.querySelectorAll('[aria-disabled="true"]').forEach((link) => {
    link.addEventListener('click', (event) => event.preventDefault());
  });

  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        menuLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sections.forEach((section) => navObserver.observe(section));
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll('.feature-card, .screens-grid figure, .timeline li, .story-grid li');
    revealTargets.forEach((item) => item.setAttribute('data-reveal', ''));
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    revealTargets.forEach((item) => revealObserver.observe(item));
  }
})();
