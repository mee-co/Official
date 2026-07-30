document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  navToggle.addEventListener('click', () => navMenu.classList.toggle('show-menu'));

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        navMenu.classList.remove('show-menu');
      }
    });
  });

  document.querySelectorAll('.dropdown > .nav__link').forEach(dropLink => {
    dropLink.addEventListener('click', function(e) {
      if (window.innerWidth <= 968) {
        e.preventDefault();
        this.parentElement.classList.toggle('show-dropdown');
      }
    });
  });

  document.querySelectorAll('.contact-option__header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      document.querySelectorAll('.contact-option').forEach(opt => {
        if (opt !== parent) opt.classList.remove('open');
      });
      parent.classList.toggle('open');
    });
  });

  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.15 });
  revealElements.forEach(el => observer.observe(el));

  window.addEventListener('scroll', () => {
    document.getElementById('header').style.boxShadow = 
      window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,0.2)' : '0 2px 16px rgba(0,0,0,0.25)';
  });
});
