 import { data } from "./data";



  
  function create() {
    let cnts = document.querySelectorAll(" .marqueEffect .cnt");
    console.log(cnts);
    
    cnts.forEach((cnt, index) => {
        data.forEach((e, i) => {
                let elem = document.createElement('div');
                elem.classList.add('elem');
                
                let link = document.createElement('a');
                link.classList.add('photo');
                link.setAttribute('href', e.instaUrl);
                
                let img = document.createElement('img');
                img.src = e.cldurl;
                
                link.appendChild(img);
                elem.appendChild(link);
                
                cnt.appendChild(elem);
        });
    });
  
  }
  create()
  
  
    let marqueetl;
    
  function animation() {
    
   marqueetl = gsap.timeline({
    scrollTrigger: {
        // markers: true, 
        trigger: '.marquee',
        start: "top 90%",
        end: "bottom 30%",
        scrub:2
    }
  });
  
  marqueetl.to(".cnt1", {
    x: "-20%",
    duration: 2,
  })
  .to(".cnt2", {
    x: "20%",
    duration: 2
  },"<")
  
    }
    
animation();
 export {marqueetl} 
  
  
  
  
  
  
