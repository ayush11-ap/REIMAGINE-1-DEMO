
import '../css/coustom.css'
import '../css/Home.css'
// import '../css/ourCollection.css'
import '../css/review.css'
import '../css/marquee.css'
import '../css/footer.css'



import pathCreation from "./PathCreation";
import {FeatureAnim} from './Page2'
import { LoderTimeLine } from "./Loder";
import {HomeTimeLine} from './Home'
import { Page2Tl } from "./Page2";  // koi farak nahi padta hai 
import { smokeEffect} from "./Page3";
import { Process_Timeline } from './page4' // import kar liya timeline suru 
import {ourCollection} from  './Page5'
import { bsptl } from './Page6'
import { dstl } from './page7'
import {reviewSection} from './page8'
import {marqueetl} from './Page9'




let res = pathCreation();
FeatureAnim(res);

  

smokeEffect();  //  page3



ourCollection();



//   //!  review section // page 8 
reviewSection()


 
let masterProf = gsap.timeline()
.add(LoderTimeLine)
  .add(HomeTimeLine)


  let TriggeredTimeline = gsap.timeline()
  .add(Page2Tl)
  .add(Process_Timeline)
  .add(bsptl)
    .add(dstl)
  .add(marqueetl)


 
      
          
  
    
  
          
          
      
  
      
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  