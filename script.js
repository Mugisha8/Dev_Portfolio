document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobileMenu");
  const menuList = document.querySelector(".menu-list");

  mobileMenu.addEventListener("click", function () {
    menuList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  document.querySelectorAll(".menu-list").forEach((n) =>
    n.addEventListener("click", () => {
      menuList.classList.remove("active");
      mobileMenu.classList.remove("active");
    })
    
  );
});


//-----------------

const slider = document.querySelector('.slider');
const preBtn = document.querySelector('.pre-btn');
const nxtBtn = document.querySelector('.nxt-btn');

let counter = 0;
const size = document.querySelector('.blog-card').clientWidth;

nxtBtn.addEventListener('click', () => {
  if (counter >= slider.children.length - 1) return;
  counter++;
  slider.style.transform = `translateX(${-size * counter}px)`;
});

preBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  slider.style.transform = `translateX(${-size * counter}px)`;
});
