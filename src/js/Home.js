let HomeTimeLine;

HomeTimeLine = gsap.timeline();

HomeTimeLine
    .to(".innerHome .navelem", {
        y: "0",
        opacity: 1,
        stagger: 0.02,
        ease: "back(2)"
    })
    .to(".txtz p", {
        x: "0%",
        opacity: 1,
        stagger: {
            each: 0.02,
            from: "end"
        },
        ease: "power1.inOut"
    })
    .to(".txt p", {
        opacity: 0.8,
        ease: "power4.inOut"
    }, "<+=0.3")
    .from(".vid .circ", {
        opacity: 0,
        scale: 4,
        stagger: 0.03,
        ease: "expoScale(0.5,7,none)",
    });

function menuToggle() {
    let menu = document.querySelector(".menu");
    let close = document.querySelector('.close');

    menu.addEventListener("click", () => {
        document.querySelector(".menubox").style.display = "flex";
        menu.style.display = "none";
        close.style.display = "flex";
    });

    close.addEventListener("click", () => {
        document.querySelector(".menubox").style.display = "none";
        menu.style.display = "flex";
        close.style.display = "none";
    });
}

menuToggle();

export { HomeTimeLine };
