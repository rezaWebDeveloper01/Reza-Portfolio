const text = "Front-End Developer & Computer Engineering Student";
const typingText = document.getElementById("typing-text");

let index = 0;

function typeText() {
  if (index < text.length) {
    typingText.textContent += text[index];
    index++;

    setTimeout(typeText, 50);
  }
}

typeText();


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

// ==========================
// === MODAL FUNCTIONALITY ===
// ==========================

function setupModal(openBtnId, modalId, closeBtnId) {
  const openBtn = document.getElementById(openBtnId);
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeBtnId);

  openBtn.addEventListener("click", () => {
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
}


// ==================
// === CONTACT MODAL
// ==================

setupModal(
  "contact-btn",
  "modal-contact",
  "close-contact-btn"
);


// ==================
// === ABOUT MODAL
// ==================

setupModal(
  "about-btn",
  "modal-about",
  "close-about-btn"
);

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
