// Smooth scroll for buttons with data-scroll
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-scroll");
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight nav on scroll
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 110; // offset for sticky header
  let currentSectionId = "";

  sections.forEach((section) => {
    if (scrollPos >= section.offsetTop) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href").replace("#", "");
    link.classList.toggle("active", href === currentSectionId);
  });
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinksEl = document.getElementById("navLinks");

if (navToggle && navLinksEl) {
  navToggle.addEventListener("click", () => {
    navLinksEl.classList.toggle("open");
  });

  // Close nav when clicking a link (on mobile)
  navLinksEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksEl.classList.remove("open");
    });
  });
}

// Round tabs
const roundTabs = document.querySelectorAll(".round-tab");
const roundPanels = document.querySelectorAll(".round-panel");

roundTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const round = tab.getAttribute("data-round");

    roundTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    roundPanels.forEach((panel) => {
      const panelRound = panel.getAttribute("data-round-panel");
      panel.classList.toggle("active", panelRound === round);
    });
  });
});

// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // close others
    faqItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove("open");
        const ans = other.querySelector(".faq-answer");
        if (ans) ans.style.maxHeight = null;
      }
    });

    if (!isOpen) {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      item.classList.remove("open");
      answer.style.maxHeight = null;
    }
  });
});

// Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  const show = window.scrollY > 400;
  if (show) {
    backToTop.style.display = "flex";
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
    setTimeout(() => {
      if (window.scrollY <= 400) backToTop.style.display = "none";
    }, 150);
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
