document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".mobileMenu");
    const menuList = document.querySelector(".menu-list");
  
    mobileMenu.addEventListener("click", function () {
      menuList.classList.toggle("active");
    });
  });
  