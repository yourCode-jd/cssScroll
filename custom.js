// ====== body overflow hidden ======
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#my-button");
  if (button) {
    button.addEventListener("click", function () {
      // do something
    });
  }
});

// ====== toggle menu ======
function toggleHighlight() {
  const element = document.getElementById("slideNavigation");
  element.classList.toggle("slideMenu");
}

// ====== Hero section ======

window.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline();

  // ✅ HEADER ANIMATION
  tl.from(".logo", {
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  tl.from(
    ".hamburger",
    {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    },
    "-=0.5"
  ); // overlaps slightly with logo

  // ✅ HERO SECTION ANIMATION
  tl.from(".hero-image", {
    opacity: 0,
    x: 300,
    rotate: 30,
    scale: 0.9,
    duration: 1.6,
    ease: "elastic.out(1, 0.5)",
  });

  tl.fromTo(
    ".hero-title",
    {
      opacity: 0,
      scale: 1.5,
      filter: "blur(20px)",
    },
    {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.6,
      ease: "power4.out",
    },
    "-=1"
  );
});

// showcase
