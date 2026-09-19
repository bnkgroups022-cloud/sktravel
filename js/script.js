// SK Travels & SK House — site interactions
document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header shrink/tint on scroll
  var header = document.getElementById('siteHeader');
  var whatsappFloat = document.querySelector('.whatsapp-float');
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    backToTop.classList.toggle('visible', window.scrollY > 500);
    if (whatsappFloat) whatsappFloat.classList.toggle('visible', window.scrollY > window.innerHeight * 0.6);
  }

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
    });
  });

  // Back to top button
  var backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', onScroll);
  onScroll();

  // Animated stat counters
  var counters = document.querySelectorAll('.stat-number');
  var countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    counters.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      var duration = 1400;
      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString();
        }
      }
      requestAnimationFrame(step);
    });
  }

  // Scroll-reveal for sections
  var revealTargets = document.querySelectorAll(
    '.about-grid, .card-grid .service-card, .room-grid .room-card, .dest-grid .dest-card, .testimonial-grid .testimonial-card, .why-grid, .contact-grid'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  var statsSection = document.querySelector('.stats');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(function (el) { observer.observe(el); });

    if (statsSection) {
      var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.disconnect();
          }
        });
      }, { threshold: 0.4 });
      statsObserver.observe(statsSection);
    }
  } else {
    // Fallback: no IntersectionObserver support
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
    animateCounters();
  }

  // Static contact form: friendly demo submit handler
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks for the enquiry! This form is a template — connect it to email, WhatsApp click-to-chat, or a booking system so real messages come through.');
      contactForm.reset();
    });
  }
});
