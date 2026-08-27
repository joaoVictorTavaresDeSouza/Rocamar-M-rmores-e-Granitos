    /* === LOADER === */
    const MIN_TIME = 1500;
    const startTime = performance.now();

    window.addEventListener('load', () => {
      const elapsed = performance.now() - startTime;
      const wait = Math.max(0, MIN_TIME - elapsed);
      setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
      }, wait);
    });

    /* === HEADER SCROLL === */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    /* === HAMBURGER MENU === */
    const hamburger = document.getElementById('hamburger');
    const navOverlay = document.getElementById('nav-overlay');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navOverlay.classList.toggle('open');
      document.body.style.overflow = navOverlay.classList.contains('open') ? 'hidden' : '';
    });
    navOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    /* === CARREGAMENTO EM RELAÇÃO AO SCROLL === */
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));