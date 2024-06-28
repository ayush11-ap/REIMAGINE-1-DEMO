
let Process_Timeline;
  
  


  let circles = document.querySelectorAll(".circle");
  let circleSr = document.querySelectorAll(".circle p")
  
  
  circles.forEach((circle) => {
    gsap.set(circle, {
      opacity: 0,
    });
  });
  
  let lineContainer = document.querySelectorAll(".lineContainer");
  




   Process_Timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      // markers: true,
          start: "top top",
      end:"bottom -50%" ,
          scrub: true,
      pin:true,
    },
  });
    
    
    let tl1 = gsap.timeline()
  .to(lineContainer[0], {
    height: "20%",
      ease: "linear",
    duration:2 ,
  })
    .to(circles[0], {
        opacity: 1,
        duration: 1,
        scale:1.5,
        ease:"back(7)"
    })
        .to(circleSr[0], {
        opacity:1
    })
      .to(".img1", {
          rotationY: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease:"back(2)"
    } , "<"
    )


    let tl2 = gsap.timeline()
    .to(lineContainer[1], {
        height: "20%",
          ease: "linear",
        duration:2 ,
      })
        .to(circles[1], {
            opacity: 1,
            duration: 1,
            scale:1.5,
            ease:"back(7)"
        })
        .to(circleSr[1], {
            opacity:1
        })
          .to(".img2", {
              rotationY: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease:"back(2)"
        } , "<"
        )

    let tl3 = gsap.timeline()
    .to(lineContainer[2], {
        height: "20%",
          ease: "linear",
        duration:2 ,
      })
        .to(circles[2], {
            opacity: 1,
            duration: 1,
            scale:1.5,
            ease:"back(7)"
        })
        .to(circleSr[2], {
            opacity:1
        })
          .to(".img3", {
              rotationY: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease:"back(2)"
        } , "<"
        )

    let tl4 = gsap.timeline()
    .to(lineContainer[3], {
        height: "20%",
          ease: "linear",
        duration:2 ,
      })
        .to(circles[3], {
            opacity: 1,
            duration: 1,
            scale:1.5,
            ease:"back(7)"
        })
        .to(circleSr[3], {
            opacity:1
        })
          .to(".img4", {
              rotationY: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease:"back(2)"
        } , "<"
        )

    let tl5 = gsap.timeline()
    .to(lineContainer[4], {
        height: "20%",
          ease: "linear",
        duration:2 ,
      })
        .to(circles[4], {
            opacity: 1,
            duration: 1,
            scale:1.5,
            ease:"back(7)"
        })
        .to(circleSr[4], {
            opacity:1
        })
          .to(".img5", {
              rotationY: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease:"back(2)"
        } , "<"
        )
   
    
    
    
    Process_Timeline
        .to(".process h1", {
            scale: 0,
            duration: 2,
          opacity: 0,
            top:"0%" ,
            ease:"expo.easeInOut"
        })
        .add(tl1)
        .add(tl2)
        .add(tl3)
        .add(tl4)
        .add(tl5)


        export {Process_Timeline}





