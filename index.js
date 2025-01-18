function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  if (icon.classList.contains("bxs-navigation")) {
    icon.classList.remove("bxs-navigation");
    icon.classList.add("bx-navigation"); // Replace with a suitable close icon
  } else {
    icon.classList.remove("bx-navigation");
    icon.classList.add("bxs-navigation");
  }

  icon.classList.toggle("open");
}
const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    goTopBtn.style.display = "flex";
  } else {
    goTopBtn.style.display = "none";
  }
}

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
