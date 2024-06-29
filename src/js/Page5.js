 export function ourCollection() {
  let elems = document.querySelectorAll(".ourBox")
let arrows = document.querySelectorAll(".arrow")



let overlay = document.querySelector('.our_overlay')
let overlayImgs = document.querySelectorAll('.our_overlay .img ')



elems.forEach((el,idx) => {
    el.addEventListener("mouseenter",(e) => {
    
        gsap.to(el,{
            opacity:0.8,
            duration:0.3,
        })
        gsap.to(arrows[idx],{
            rotation:-45,
            duration:0.3
        })
        





        let percent = el.getAttribute('data-percent');





        gsap.to(overlay, {
         
        opacit:1,
            ease: "expo.easeInOut",
            duration: 0.5,
        })

      
        gsap.to(overlayImgs, {
            y:percent,
            ease:"Power4.easeOut",
            duration: 1,
            delay:0.1 
            
        })
        gsap.to(overlay, {
            opacity: 1,
             ease:"Power4.easeOut"
   })

    })
    el.addEventListener("mouseleave",(e) => {
    
        gsap.to(el,{
            opacity:0.6,
            duration:0.3,
        })
        gsap.to(arrows[idx],{
            rotation:0,
            duration:0.3
        })

        gsap.to(overlay, {
            opacity: 0,
            ease:"Power4.easeOut",
   })
  
    })
})

}