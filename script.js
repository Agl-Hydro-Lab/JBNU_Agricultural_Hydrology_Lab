const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const progressBar = document.querySelector(".scroll-progress");
const navigationLinks = document.querySelectorAll(".desktop-nav a");
const sectionIds = [
  "home",
  "about",
  "research",
  "professor",
  "projects",
  "publications",
  "people",
  "contact",
];

function closeMenu() {
  mobileNav?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "메뉴 열기");
}

menuButton?.addEventListener("click", () => {
  const isOpen = mobileNav?.classList.toggle("open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const percent = total > 0 ? (window.scrollY / total) * 100 : 0;
  if (progressBar) progressBar.style.width = `${percent}%`;
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navigationLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${visible.target.id}`,
      );
    });
  },
  { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.5] },
);

sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean)
  .forEach((section) => observer.observe(section));

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
