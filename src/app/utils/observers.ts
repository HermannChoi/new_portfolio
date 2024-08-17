export const observer1 = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    },
    { threshold: 0.5 }
  );

  const targetElements = document.querySelectorAll(".fade-wrap");
  targetElements.forEach((element) => {
    observer.observe(element);
  });
};

export const observer2 = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in2");
        } else {
          entry.target.classList.remove("fade-in2");
        }
      });
    },
    { threshold: 0.5 }
  );

  const targetElements = document.querySelectorAll(".fade-wrap2");
  targetElements.forEach((element) => {
    observer.observe(element);
  });
};
