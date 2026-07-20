gsap.registerPlugin( ScrollTrigger ); //GSAP scroll plugin registration
/* gsap.registerPlugin( TextPlugin ); */ //GSAP scroll plugin registration


// Register GSAP plugins (once) before using them
/* gsap.registerPlugin(

  Draggable, TextPlugin, Draggable, DrawSVGPlugin, EaselPlugin, Flip,
  GSDevTools, InertiaPlugin, MorphSVGPlugin, MotionPathPlugin, MotionPathHelper, Observer,
  Physics2DPlugin, PhysicsPropsPlugin, PixiPlugin, ScrambleTextPlugin, ScrollToPlugin, ScrollSmoother,
  SplitText, TextPlugin
); */

// Available plugins


console.log('Lets test GSAP!');

gsap.fromTo('.header',{
  opacity:0,
  y:50
},{
  y: 0,
  opacity: 100,

  ease:'expo',
},'>')


//gsap.to 

gsap.to('.object',{
  x: 100,
  scaleX: 50,
  duration: 2,
  yoyo: true,
  /* scaleY: 3, */
  repeat: -1,
   backgroundColor: "#30e042",
   ease:'expo', 
});

gsap.to('.object2',{
  x: 500,
  radius:360,
  duration: 4,
  yoyo: true,
  repeat: -1,
  rotation: 360,
  opacity: 50,
   backgroundColor: "yellow", 
   ease:'expo',
});

gsap.to('.object3',{
  
  scaleY: 100,
  duration: 5,
  yoyo: true,
  /* scaleY: 3, */
  repeat: -1,
   backgroundColor: "#3097e0",
   ease:'expo', 
})

gsap.to('.object4', {
  scaleX:2,
  scaleY:2,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease:'expo',
})

//GSAP Text plugin

/* gsap.to('.header', {
  duration: 1,
  text: {
    value: "Your new text",
    newClass: "class2",
    delimiter: " ",
  },
}); */

//gsap.fromTo

gsap.fromTo('.object5',{
 x: -1000,
 opacity:0,

},{
  opacity:100,
  x:0,
  scaleY: 10,
  rotation:720,
  radius:500,
  duration: 5,
  yoyo: true,
  /* scaleY: 3, */
  repeat: -1,
   backgroundColor: "#3097e0",
   ease:'expo',
},'>');

gsap.to('.para',{
  y: 200,
  x: 10,
  opacity:100,
  duration:500,

})


