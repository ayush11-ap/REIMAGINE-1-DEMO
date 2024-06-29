
  //  ! for door section tailwind config should be  updated
  
  
  let dstl;
  // function doorAnimation() {
    dstl = gsap.timeline({
      scrollTrigger:{
          trigger:".door_Section ",
          // markers:true,
          start:"top 85%",
          end:"bottom 70%",
          scrub:1,
    
      }       
    })
    
    if (window.innerWidth <= 620) {
      
   } else {
      
    dstl
    .to(".overlay-image", {
        opacity:0
    })
    
    
    .from([" .door_Section .left ,.door_Section .right"], {
    rotationY: function (index, ) {
        if (index === 0) {
            return 180
        }
        else if (index == 1) {
             return -180
        }
        
  },
    duration: 0.8,
  ease:"back(1)"
  }
  )
  
  
  .to([".door_Section .heading"], {
  opacity:1,
  onStart:headingTextEffect ,
  
  })
  
  
  
  
  function headingTextEffect() {
    var $element = $(" .door_Section .heading");
  
    $element.textillate({
        in: {
            effect: 'fadeInLeft',
            delay:"1",
            callback: function () {
                gsap.to([" .door_Section .subheading"], {
                    opacity:1,
                    
                })
           }
            
        },  
    });
  
    $element.textillate('start');
  }
  
  
    }
    
    
    
export { dstl };  