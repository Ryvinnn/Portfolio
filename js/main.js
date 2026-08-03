/* ========================================
   LANDING PAGE - INTERACTIVE SCRIPTS
   Navigation, Accordion, Scroll Effects
   Optimized for 60-120fps ultra smooth performance
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- DOM Elements ----------
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = document.querySelectorAll('.nav-links a');
  const allNavLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
  const faqItems = document.querySelectorAll('.faq-item');
  const revealElements = document.querySelectorAll('.reveal');
  const statNumbers = document.querySelectorAll('[data-count]');
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const doodles = Array.from(document.querySelectorAll('.doodle'));

  // ---------- Cache Layout Measurements (Prevents Layout Thrashing) ----------
  let cachedSections = [];

  function updateLayoutCache() {
    cachedSections = sections.map(sec => ({
      id: sec.getAttribute('id'),
      top: sec.offsetTop,
      height: sec.offsetHeight,
      link: document.querySelector(`.nav-links a[href="#${sec.getAttribute('id')}"]`)
    }));
  }

  updateLayoutCache();
  window.addEventListener('resize', updateLayoutCache, { passive: true });

  // ---------- Combined Throttle Scroll Manager ----------
  let isScrollTicking = false;

  function onScroll() {
    const scrollY = window.scrollY;

    // 1. Navbar scrolled class
    if (scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // 2. Active nav link
    const scrollPos = scrollY + 200;
    for (let i = 0; i < cachedSections.length; i++) {
      const sec = cachedSections[i];
      if (scrollPos >= sec.top && scrollPos < sec.top + sec.height) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (sec.link) sec.link.classList.add('active');
        break;
      }
    }

    // 3. Parallax doodles (only if visible)
    if (scrollY < 1200 && doodles.length > 0) {
      for (let i = 0; i < doodles.length; i++) {
        const speed = 0.02 + (i * 0.01);
        doodles[i].style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      }
    }

    isScrollTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (!isScrollTicking) {
      requestAnimationFrame(onScroll);
      isScrollTicking = true;
    }
  }, { passive: true });

  // ---------- Smooth Scroll for Nav Links ----------
  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }

      if (mobileNav.classList.contains('active')) {
        closeMobileNav();
      }
    });
  });

  // ---------- Mobile Hamburger Menu ----------
  function closeMobileNav() {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('active');

    if (isOpen) {
      closeMobileNav();
    } else {
      hamburger.classList.add('active');
      mobileNav.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      closeMobileNav();
    }
  });

  // ---------- FAQ Accordion ----------
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      item.classList.toggle('active', !isActive);
    });
  });

  // ---------- Scroll Reveal Animation (Unobserved once visible for max perf) ----------
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ---------- Counter Animation ----------
  let countersAnimated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
      }
    });
  }, {
    threshold: 0.3
  });

  statNumbers.forEach(el => counterObserver.observe(el));

  function animateCounters() {
    statNumbers.forEach(el => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const duration = 1800;
      const startTime = performance.now();
      const suffix = el.getAttribute('data-suffix') || '';

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);

        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target + suffix;
        }
      }

      requestAnimationFrame(update);
    });
  }

  // ---------- Form Submit Handler ----------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      const waNumber = '6285731674467';
      const waMessage = encodeURIComponent(
        `Halo, saya ${name} (${email}).\n\n${message}`
      );
      const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

      window.open(waUrl, '_blank');
      contactForm.reset();

      const btn = contactForm.querySelector('.btn');
      const originalText = btn.textContent;
      btn.textContent = '✓ Terkirim!';
      btn.style.background = '#34D399';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3000);
    });
  }

  // Initial scroll check
  onScroll();
});
