(function () {
  const btn = document.querySelector("[data-mobile-toggle]");
  const mobileMenu = document.getElementById("mobileMenu");

  const setExpanded = (isOpen) => {
    document.body.classList.toggle("mobile-open", isOpen);
    if (btn) btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (mobileMenu) mobileMenu.setAttribute("aria-hidden", isOpen ? "false" : "true");
  };

  if (btn) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = document.body.classList.contains("mobile-open");
      setExpanded(!isOpen);
    });
  }

  // Close menu if you click outside it
  document.addEventListener("click", (e) => {
    if (!document.body.classList.contains("mobile-open")) return;
    const clickedInside =
      (btn && btn.contains(e.target)) || (mobileMenu && mobileMenu.contains(e.target));
    if (!clickedInside) setExpanded(false);
  });

  // Close menu on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setExpanded(false);
  });

  // Highlight current nav link by URL (desktop + mobile)
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".navlinks a, .mobile-links a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Simple client-side form feedback (works even without backend)
  const form = document.querySelector("form[data-consultation]");
  if (form) {
    form.addEventListener("submit", () => {
      const msg = document.querySelector("[data-form-message]");
      if (msg) {
        msg.textContent =
          "Thanks! If you don't have Formspree set up yet, this form may not send. You can connect it in consultation.html.";
        msg.style.display = "block";
      }
    });
  }
})();
