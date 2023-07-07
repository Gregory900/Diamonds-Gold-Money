const navMoblie = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const navLinks = document.querySelectorAll(".nav__link");

const handleNav = () => {
  navBtn.classList.toggle("is-active");
  navMoblie.classList.toggle("nav-mobile--active");
  document.body.classList.toggle("sticky-body");

  navLinks.forEach((item) => {
    item.addEventListener("click", () => {
      navBtn.classList.remove("is-active");
      navMoblie.classList.remove("nav-mobile--active");
      document.body.classList.remove("sticky-body");
    });
  });
};

navBtn.addEventListener("click", handleNav);

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

handleCurrentYear();
