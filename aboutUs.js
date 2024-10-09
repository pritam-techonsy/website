document.addEventListener("DOMContentLoaded", (event) => {
    gsap.from("#heading", {
      scale: 2,
      duration: 1,
      ease: "bounce.out",
    });
  
    gsap.to("#heading", {
      scale: 1,
      duration: 1,
      ease: "bounce.out",
    });
  });
  