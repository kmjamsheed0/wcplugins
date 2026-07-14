const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav
    .querySelectorAll("a")
    .forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open")),
    );
}
document
  .querySelectorAll("#year")
  .forEach((el) => (el.textContent = new Date().getFullYear()));
