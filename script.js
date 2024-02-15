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
