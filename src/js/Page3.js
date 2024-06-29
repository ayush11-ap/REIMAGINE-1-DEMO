const detailstl = gsap.timeline({
  defaults: {
      duration: 0.75,
      ease: 'power4.out'
  }
});

function smokeEffect() {
  detailstl.fromTo("#smokes", {
      y: 25,
      opacity: 0.1
  }, {
      y: -30,
      scaleY: 1.2,
      opacity: 1,
      yoyo: true,
      repeat: -1,
      duration: 1,
      skewY: 25
  }).fromTo("#smokes-2", {
      y: 25,
      opacity: 0.1
  }, {
      y: -30,
      scaleY: 1.2,
      opacity: 1,
      yoyo: true,
      repeat: -1,
      duration: 1,
      skewY: 25
  }, 0);
}

export {
  smokeEffect
};
