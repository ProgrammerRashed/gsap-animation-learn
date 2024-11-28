const counter = document.querySelector(".counter");
const loadingTimeline = gsap.timeline({ paused: true }); // Ensure the timeline starts paused
const dots = document.querySelectorAll(".dots");
const loadingText = document.querySelector(".loading");
const startLoader = () => {
  let currentValue = 0;

  // Animate the dots in a loop
  const animateDots = () => {
    const dotsTimeline = gsap.timeline({ repeat: -1 });
    dotsTimeline
      .to(dots[0], { opacity: 1, duration: 0.3 })
      .to(dots[1], { opacity: 1, duration: 0.3 }, "+=0.1")
      .to(dots[2], { opacity: 1, duration: 0.3 }, "+=0.1")
      .to(dots, { opacity: 0, duration: 0.3, stagger: 0.1 }, "+=0.3");
  };

  animateDots();

  const updateCounter = () => {
    if (currentValue >= 100) {
      currentValue = 100;
      counter.innerHTML = currentValue + "%";
      loadingTimeline.play(); // Play the timeline when loading is complete
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counter.innerHTML = currentValue + "%";

    // Call `updateCounter` again after a random delay
    const delay = Math.floor(Math.random() * 10) + 100;
    setTimeout(updateCounter, delay);
  };

  updateCounter();
};

startLoader();

// Add all animations to the same timeline for synchronization
loadingTimeline
  .to(".loader-card", {
    scale: 1,
    borderRadius: "0px",
    duration: 1,
    ease: "power1.out",
  })
  .to(
    ".bg-div-2",
    {
      x: "200px",
      scale: 0.8,
      duration: 1,
      ease: "power1.out",
    },
    "<"
  )
  .to(
    ".bg-div-1",
    {
      x: "100px",
      scale: 0.9,
      duration: 1,
      ease: "power1.out",
    },
    "<"
  );
loadingTimeline
  .to(
    loadingText,
    {
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      display: "none",
    },
    "<"
  )
  .to(
    counter,
    {
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      display: "none",
    },
    "<"
  );

// Independent animations for bg-div-1 and bg-div-2 translations
gsap.to(".bg-div-1", {
  x: "55px",
  duration: 1.3,
  ease: "power1.out",
});

gsap.to(".bg-div-2", {
  x: "110px",
  duration: 1.3,
  ease: "power1.out",
});
