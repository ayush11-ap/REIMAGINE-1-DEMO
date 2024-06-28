function reviewSection() {
    
    const reviewtl = gsap.timeline({defaults: {duration:0.75, ease:'power2.out'}})
  
  function reviewCard(){
      var swiper = new Swiper(".mySwiper", {
          slidesPerView:1,
          spaceBetween: 20,
          breakpoints:{
              1024:{
                  slidesPerView: 2,
                  spaceBetween:30
              }
          },
          autoplay:{
              delay:3000
          }
        });
  }
  reviewCard();
  
      reviewtl.fromTo('#Top-Design', {y: -60}, {y:0, duration: 0.5, ease: "power4.in"});
      reviewtl.fromTo('#Amazon-Logo', {y: 150}, {y: 0, duration:1.2, ease: "bounce.out",}, "<");
  
      reviewtl.fromTo('#logo-top', {y:-10}, {y:0, ease:"bounce.out", duration:1}, '<')
  
  
  
  
  }
  
export {reviewSection}
  
  
  
  