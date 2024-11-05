function toggleDrawer() {
    const drawer = document.querySelector('.drawer');
    drawer.classList.toggle('active');
}
const cards = gsap.utils.toArray('.card');

cards.forEach(card => {
    gsap.from(card, { 
      x: 150,
      scrollTrigger: {
        trigger: card,
        scrub: true,
        end: 0
      }
    })
  });

  document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".nav-bar a", {
      opacity: 0,
      x: -20,
      duration: 0.6,
      stagger: 0.2, 
      ease: "power3.out"
    });
    gsap.from(".get-started-btn", {
        opacity: 0,
        y: 20,          // Start from below
        duration: 1,    // Duration of the animation
        delay: 0.3,     // Delay the animation slightly
        ease: "power3.out"  // Easing for smooth animation
    });

    gsap.from(".contact-us-btn", {
        opacity: 0,
        y: 20,          // Start from below
        duration: 1,
        delay: 0.5,     // Delay a little more than the previous button
        ease: "power3.out"
    });
  });


// document.addEventListener('DOMContentLoaded', () => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.from(".card", {
//       x: "100%",
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".values",
//         start: "top 80%",
//         end: "bottom 20%",
//         scrub: 0,
//         once: true
//       }
//     });
//   });

