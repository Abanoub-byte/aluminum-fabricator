document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. Nav scroll class ── */
  var nav = document.querySelector('.nav');
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── 2. Lightbox ── */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.gallery__item[data-src]').forEach(function (item) {
    item.addEventListener('click', function () {
      lightboxImg.src = item.dataset.src;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  document.addEventListener('click', function(e) {
  var link = e.target.closest('a');
  if (!link) return;
  var href = link.getAttribute('href') || '';

  if (href.startsWith('https://wa.me/')) {
    gtag('event', 'whatsapp_click', {
      event_category: 'contact',
      event_label: 'whatsapp'
    });
  }

  if (href.startsWith('tel:')) {
    gtag('event', 'call_click', {
      event_category: 'contact',
      event_label: 'phone'
    });
  }
});

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });

  /* ── 3. Scroll animations (replaces AOS) ── */
  var animateEls = document.querySelectorAll('.animate');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px' });
    animateEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything
    animateEls.forEach(function (el) { el.classList.add('visible'); });
  }

});
