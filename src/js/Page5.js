function ourCollection() {
    function selectAll(elem) {
      return document.querySelectorAll(elem)
    }
    
    function select(elem) {
      return document.querySelector(elem)
    }
    
    
    let elems = selectAll('.our_Collections  img');
    
    
    let box = select('.our_Collections .box')
    
      let our_Collections = document.querySelector(".our_Collections")
    
      our_Collections.addEventListener('mousemove', (e) => {
          
    
      gsap.to(box, {
          left: e.clientX,
          top: e.clientY,
          ease: "expo.easeInOut",
          duration: 0.5,
      })
      
    })
    
    
    
    selectAll('.container').forEach((elem) => {
      elem.addEventListener('mouseenter', (e ,idx) => { 
      
          let percent = elem.getAttribute('data-percent');
          gsap.to(elems, {
              y:percent,
              ease:"Power4.easeOut",
              duration: 1,
              delay:0.1 
              
          })
          gsap.to(box, {
              opacity: 1,
               ease:"Power4.easeOut"
     })
    
      })
      elem.addEventListener('mouseleave', (e ,idx) => { 
      
          let percent = elem.getAttribute('data-percent');
         
          gsap.to(box, {
              opacity: 0,
              ease:"Power4.easeOut",
     })
    
      })
    
    
    
    })
    
    
  }
  
  export {ourCollection}