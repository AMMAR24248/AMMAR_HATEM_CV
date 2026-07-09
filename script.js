console.log("Portfolio script loaded");

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

const counters = document.querySelectorAll(".stat-card h3");
let counterStarted = false;

function startCounters() {
  counters.forEach(function (counter) {
    const target = Number(counter.getAttribute("data-target"));
    let current = 0;
    const speed = 40;

    const updateCounter = function () {
      if (current < target) {
        current++;
        counter.textContent = current;
        setTimeout(updateCounter, speed);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

const statsSection = document.querySelector(".stats-section");

const statsObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !counterStarted) {
        counterStarted = true;
        startCounters();
      }
    });
  },
  {
    threshold: 0.4,
  }
);

if (statsSection) {
  statsObserver.observe(statsSection);
}
