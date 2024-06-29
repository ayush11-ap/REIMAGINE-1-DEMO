let Page2Tl;

function FeatureAnim([path, path1, path2]) {
  let tlmob;
  let tldesk;

  Page2Tl = gsap.timeline({
    scrollTrigger: {
      // markers: true,
      trigger: ".triggerPage",
      scroller: "body",
      start: "top 0%",
      end: "bottom 25%",
      scrub: 1,
      toggleActions: "restart complete reverse reset",
      pin: true,
    },
  });

  Page2Tl.to(".home-overlay", {
    scale: 0,
    duration: 0.5,
    borderRadius: "50%",
  })
    .to(".allellem", {
      opacity: 1,
    }, "<")
    .to(".allellem .b1", {
      ease: "linear",
      motionPath: {
        path: path,
        align: ".box",
      },
      opacity: 1,
    }, "+=0.05")
    .to(".allellem .b2", {
      ease: "linear",
      motionPath: {
        path: path1,
        align: ".box",
      },
      opacity: 1,
    }, "<")
    .to(".allellem .b3", {
      ease: "linear",
      motionPath: {
        path: path2,
        align: ".box",
      },
      opacity: 1,
    }, "<");

  function setallElem() {
    if (window.innerWidth <= 640) {
      tlmob = gsap.timeline({
        defaults: {
          duration: 2,
          ease: "linear",
        },
      });

      tlmob.to(".b1", {
        x: "250",
        y: "-260",
      }, 0)
        .to(".b2", {
          x: "-80",
          y: "20",
        }, 0)
        .to(".b3", {
          x: "-160",
          y: "270",
        }, 0)
        .to(".box", {
          height: "55vw",
          width: "55vw",
          borderRadius: "50%",
          duration: 0.5,
        })
        .to(".cnt ", {
          scale: 1,
          opacity: 1,
        });

      Page2Tl.add(tlmob);
    } else {
      tldesk = gsap.timeline();

      tldesk.set(".b1", {
        x: "20",
        y: "-200",
      }, 0)
        .set(".b2", {
          x: "400",
          y: "-120",
        }, 0)
        .set(".b3", {
          x: "-370",
          y: "190",
        }, 0)
        .to(".box", {
          height: "24vw",
          width: "24vw",
          borderRadius: "50%",
          duration: 0.5,
        })
        .to(".cnt", {
          scale: 1,
          opacity: 1,
        });

      Page2Tl.add(tldesk);
    }
  }

  

  setallElem();
  window.addEventListener('resize', setallElem);
}

export { FeatureAnim, Page2Tl };