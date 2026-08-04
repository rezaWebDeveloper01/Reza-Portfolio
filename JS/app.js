// SHOW ANIMAET

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

hiddenElements.forEach(element=>{
    observer.observe(element);
});

// TOGGLE

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// COUNTER SECTION

const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const target = Number(counter.dataset.target);
  let count = 0;
  const interval = setInterval(() => {
    count++;
    counter.textContent = count;
    if (count >= target) {
      clearInterval(interval);
    }
  }, 20);
});

// CONTACT BUTTON

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

// COPY BTN

const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navigator.clipboard.writeText(button.dataset.copy);

    alert("Copied!");
  });
});
