(function () {
  const btn = document.querySelector('[data-mobile-toggle]');
  if (btn) {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('mobile-open');
      btn.setAttribute('aria-expanded', document.body.classList.contains('mobile-open') ? 'true' : 'false');
    });
  }

  // Highlight current nav link by URL
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.navlinks a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });

  // Simple client-side form feedback (works even without backend)
  const form = document.querySelector('form[data-consultation]');
  if (form) {
    form.addEventListener('submit', () => {
      const msg = document.querySelector('[data-form-message]');
      if (msg) {
        msg.textContent = "Thanks! If you don't have Formspree set up yet, this form may not send. You can connect it in consultation.html.";
        msg.style.display = 'block';
      }
    });
  }
})();
