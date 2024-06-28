

let Page2Tl;
  function FeatureAnim([path  , path1 , path2]) {
      
   Page2Tl = gsap.timeline({
        scrollTrigger: {
        //   markers: true,
          trigger: ".triggerPage",
          scroller: "body",
          start: "top 0%",
          end: "bottom 25%",
          scrub: 1,
          toggleActions: "restart complete reverse reset ",
          pin: true,
        },
      });
      
          
      Page2Tl .to(".home-overlay", {
                  scale: 0,
                   duration: 1,
                  borderRadius: "50%",
              
              })
            .to(".allellem", {
              opacity:1,
            },"<")
      
        .to(
          " .allellem .b1",
          {
            ease: "linear",
            motionPath: {
              path: path,
              align: ".box",
            },
            opacity: 1,
          },
          "+=0.05"
        )
        .to(
          " .allellem .b2",
          {
            ease: "linear",
            motionPath: {
              path: path1,
              align: ".box",
            },
            opacity: 1,
          },
         "<"
        )
        .to(
          " .allellem .b3",
          {
            // x:200 ,
            ease: "linear",
            motionPath: {
              path: path2,
              align: ".box",
            },
            opacity: 1,
          },
         "<"
        )
        .set(".b1", {
          x: "20",
          y: "-200",
        })
        .set(".b2", {
          x: "400",
          y: "-120",
        })
        .set(".b3", {
          x: "-370",
          y: "190",
        })
      
        .to(" .box ", {
            height: "24vw",
            duration:1 , 
          width: "24vw",
        })
      
          .to(".cnt", {
              scale: 1,
              opacity:1
        })
      
}
    
export {FeatureAnim ,Page2Tl}
    