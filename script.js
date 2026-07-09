const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach(function (section) {
  observer.observe(section);
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
  card.addEventListener("mousemove", function (event) {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });
});
