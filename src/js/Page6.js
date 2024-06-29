
  
  let bsptl;
  
    
   bsptl = gsap.timeline({
    scrollTrigger:{
        trigger:".best_selling_product",
        // markers:true,
        start:"top 0%",
        end:"bottom -10%",
        scrub:1,
        pin:true,
        toggleActions:"restart complete reverse reset"
    }
  })
  
  bsptl.to(".best_selling_product h1", {
    x: () => {
      if (window.innerWidth <= 620) {
         return "-90%"
      } else {
         return "-77%"
       }

    },
    ease:"linear"
    // duration:
  })
  
  
  .to(".IMAGES", {
    x:"-85%",
    // duration:10,
    ease: "power4",
  
  }, 0)
  
export { bsptl };
  
  
  
  