/* ============================================================
   CARPENTER PORTFOLIO — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. NAVIGATION: scroll class ── */
  const nav = document.querySelector('.nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── 2. MOBILE MENU ── */
  const burger      = document.getElementById('nav-burger');
  const mobileMenu  = document.getElementById('nav-mobile');
  const mobileClose = document.getElementById('nav-mobile-close');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => mobileMenu.classList.add('open'));
    mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
    mobileMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
  }

  /* ── 3. LIGHTBOX ── */
  const lightbox    = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.gallery__item[data-src]').forEach(item => {
    item.addEventListener('click', () => {
      lightboxImg.src = item.dataset.src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox)      lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  /* ── 4. LAZY LOAD fallback (for browsers without native support) ── */
  if ('IntersectionObserver' in window) {
    const lazyImgs = document.querySelectorAll('img[data-src]');
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    lazyImgs.forEach(img => io.observe(img));
  }

  /* ── 5. AOS init ── */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }

  /* ── 6. Active nav link on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');

  function highlightNav() {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', highlightNav, { passive: true });

});
