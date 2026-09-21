document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const backToTop = document.getElementById("backToTop");
  const year = document.getElementById("year");

  /* =====================================================
       Current year
       ===================================================== */

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  /* =====================================================
       Mobile navigation
       ===================================================== */

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* =====================================================
       Back to top
       ===================================================== */

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  /* =====================================================
       Simple project interaction
       =================================================== */

  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      project.classList.add("is-hovered");
    });

    project.addEventListener("mouseleave", () => {
      project.classList.remove("is-hovered");
    });
  });
});
