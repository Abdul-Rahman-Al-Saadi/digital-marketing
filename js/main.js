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
        y: 20,          
        duration: 1,   
        delay: 0.3,     
        ease: "power3.out"  
    });

    gsap.from(".contact-us-btn", {
        opacity: 0,
        y: 20,         
        duration: 1,
        delay: 0.5,     
        ease: "power3.out"
    });
  });
