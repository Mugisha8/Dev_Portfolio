//-------------- menu

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobileMenu , .admin-mobile-nav ");
  const menuList = document.querySelector(".menu-list, .adminNav ");

  mobileMenu.addEventListener("click", function () {
    menuList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    adminNav.classList.toggle("active");
    admin - mobile - nav.classList.toggle("active");
  });

  document.querySelectorAll(".menu-list").forEach((n) =>
    n.addEventListener("click", () => {
      menuList.classList.remove("active");
      mobileMenu.classList.remove("active");
    })
  );
});

//--------- editor

tinymce.init({
  selector: "textarea#default-editor",
  height: 300,
  plugins: [
    "advlist",
    "autolink",
    "link",
    "image",
    "lists",
    "charmap",
    "prewiew",
    "anchor",
    "pagebreak",
    "searchreplace",
    "wordcount",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "emoticons",
    "template",
    "codesample",
  ],
  toolbar:
    "undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |" +
    "bullist numlist outdent indent | link image | print preview media fullscreen | " +
    "forecolor backcolor emoticons",
  menu: {
    favs: {
      title: "menu",
      items: "code visualaid | searchreplace | emoticons",
    },
  },
  menubar: "favs file edit view insert format tools table",
  content_style: "body{font-family:Helvetica,Arial,sans-serif; font-size:16px}",
});

//-----------------carousel
