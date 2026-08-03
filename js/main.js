/* ========================================
   LANDING PAGE - INTERACTIVE SCRIPTS
   Navigation, Accordion, Scroll Effects
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- DOM Elements ----------
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
  const faqItems = document.querySelectorAll('.faq-item');
  const revealElements = document.querySelectorAll('.reveal');
  const statNumbers = document.querySelectorAll('[data-count]');
  const sections = document.querySelectorAll('section[id]');

  // ---------- Navbar Scroll Effect ----------
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ---------- Active Nav Link Highlight ----------
  function updateActiveLink() {
    const scrollY = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // ---------- Smooth Scroll for Nav Links ----------
  navLinks.forEach(link => {
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

      // Close mobile nav if open
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

  // Close mobile nav on Escape key
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

      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active', !isActive);
    });
  });

  // ---------- Scroll Reveal Animation ----------
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally stop observing after reveal
        // revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
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
      const duration = 2000;
      const startTime = performance.now();
      const suffix = el.getAttribute('data-suffix') || '';

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
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

  // ---------- Smooth scroll for all anchor CTA buttons ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const offsetTop = targetEl.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---------- Form Submit Handler ----------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      // WhatsApp redirect
      const waNumber = '6285731674467';
      const waMessage = encodeURIComponent(
        `Halo, saya ${name} (${email}).\n\n${message}`
      );
      const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

      window.open(waUrl, '_blank');

      // Reset form
      contactForm.reset();

      // Show success feedback
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

  // ---------- Parallax Decorations (subtle) ----------
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const doodles = document.querySelectorAll('.doodle');

        doodles.forEach((doodle, i) => {
          const speed = 0.02 + (i * 0.01);
          const yOffset = scrollY * speed;
          doodle.style.transform = `translateY(${yOffset}px)`;
        });

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // ---------- Initialize ----------
  handleNavScroll();
  updateActiveLink();
});
