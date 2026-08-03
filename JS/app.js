const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

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