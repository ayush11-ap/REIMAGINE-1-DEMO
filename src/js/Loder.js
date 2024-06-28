


  //  ! animation loder 
let LoderTimeLine; 
    LoderTimeLine = gsap.timeline()
         
          .to(".spanElem", {
          y: 0, 
          duration: 1,
          ease: "power4",
          stagger: 0.3
          })
          .to(".spanElem", {
            y: "-100%", 
            duration: 0.5,
            ease: "power4",
            stagger: 0.05
        })
      .to(".loder", {
        width:0,
        duration: 0.25,
        ease: "power4",
      
      }).to("body", {
  overflow:"auto"
})
    
export { LoderTimeLine };