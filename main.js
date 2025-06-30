const sections = document.querySelectorAll(".section");

const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(30px)";
  appearOnScroll.observe(section);
});