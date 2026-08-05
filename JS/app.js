// ===============================
// === SHOW + SKILLS ANIMATION ===
// ===============================

const hiddenElements = document.querySelectorAll(".hidden");

function animateSkillCard(card) {
  const counter = card.querySelector(".counter");
  const progress = card.querySelector(".skill-progress");

  if (!counter || !progress) return;

  const target = Number(counter.dataset.target);

  let current = 0;

  const duration = 1500;
  const fps = 60;
  const totalFrames = duration / (1000 / fps);
  const increment = target / totalFrames;

  function update() {
    current += increment;

    if (current >= target) {
      current = target;
    }

    const value = Math.floor(current);

    counter.textContent = `${value}%`;
    progress.style.width = `${value}%`;

    if (current < target) {
      requestAnimationFrame(update);
    }
  }

  update();
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("show");

      // اگر این المنت یک کارت مهارت بود
      if (entry.target.classList.contains("skill-card")) {
        setTimeout(() => {
          animateSkillCard(entry.target);
        }, 600);
      }

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
  },
);

hiddenElements.forEach((element) => {
  observer.observe(element);
});

// ==============
// === TOGGLE ===
// ==============

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// ======================
// === CONTACT BUTTON ===
// ======================

const contactBtn = document.getElementById("contact-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");

contactBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});

// ===================
// === COPY BUTTON ===
// ===================

const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navigator.clipboard.writeText(button.dataset.copy);

    alert("Copied!");
  });
});
