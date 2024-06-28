
  
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
  
  bsptl.to("h1", {
    x:"-76%",
    // duration:
  })
  
  
  .to(".IMAGES", {
    x:"-85%",
    // duration:10,
    ease: "power4",
  
  }, 0)
  
export { bsptl };
  
  
  
  