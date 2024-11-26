const cursor = document.querySelector(".cursor");
const trailSection = document.querySelector(".mouse-trail-musk");
const title = document.querySelector(".title");

// Mousemove event for cursor tracking
trailSection.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    console.log("Working", mouseX, mouseY);

    gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        opacity: 1,
        zIndex: 999,
        duration: 1,
        ease: "back.out",
    });
});

// Mouseenter and mouseleave events for the title
title.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        height: "130px",
        width: "130px",
        duration: 1,
        ease: "back.out",
    });
});

title.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        height: "50px",
        width: "50px",
        duration: 1,
        ease: "back.out",
    });
});
