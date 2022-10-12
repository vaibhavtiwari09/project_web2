
var flag=0;
document.querySelector("#menu").addEventListener("click",function(){

    document.querySelector("#fullmenu").style.height = "100vh";
  
        document.querySelector("#menu").innerHTML=`<i id="mu class="ri-close-line"></i>`;
        flag=0;

    
})





gsap.to("#card",{
    scrollTrigger:{
trigger:"#two",
start:"top 90%",
end:"top 10%",

scrub:3,

    },
top:"-90%",
rotate:"160deg",
duration:2
})



// gsap.to("#card",{
//     scrollTrigger:{
//     trigger:"#one",
//     start:"top 40%",
//     end:"80% 30%",
//     scrub:2,
//     markers:true
//     },
//         rotate:"260deg",
//         duration:1,
//         ease:Expo.easeInOut,
//     })
var tl=gsap.timeline({
    scrollTrigger:{
        trigger:"#three",
        start:"center center",
      
        scrub:2,
        pin:true,
        markers:true
    
            },
})
tl.to("#rotateimg",{
  display:"initial",
    rotate:"360deg",
    ease:Circ.easeIn,
    width:"21vw",
    height:"59vh",
    top:"31vh",
    
    duration:2
})
tl.to("#rotateimg",{
   
      
      ease:Circ.easeIn,
     
      left:"-40%",
      rotate:"360deg",
      duration:2
  },"b")
 
tl.to("#photo",{
  
    ease:Expo.easeIn,
    left:"-80%",
    duration:3
},"b")
var tl1=gsap.timeline({
    scrollTrigger:{
        trigger:"#four",
        start:"center center",
        pin:true,
        markers:true,
        scrub:2
    }
})
tl1.to(".slip",{
    y:-40,
    stagger:3,
    opacity:1
},"a")
tl1.to(".slip",{
    y:-40,
    stagger:3,
    opacity:0,
    delay:1,
   
},"a")

// tl1.to("#fourtxt span ",{
//     y:0,
//     stagger:.3
// },"a")
gsap.from("#fourtxt .m ",{
  rotate:"350deg"
})

ScrollTrigger.create({
onUpdate: function(prg){
        gsap.to("#loading",{width:Math.floor(prg.loading*100)+ "%"})
    }
});

