gsap.registerPlugin(ScrollTrigger); //GSAP scroll plugin registration

console.log('Lets test GSAP!');


//gsap.to 

gsap.to('.object',{
  x: 200,
  scaleX: 10,
  duration: 2,
  yoyo: true,
  /* scaleY: 3, */
  repeat: 5,
   backgroundColor: "#30e042", 
});

gsap.to('.object2',{
  x: 300,
  radius:360,
  duration: 2,
  yoyo: true,
  repeat: 5,
  rotation: 360,
  opacity: 50,
   backgroundColor: "yellow", 
});

gsap.to('.object3',{
  
  scaleY: 100,
  duration: 2,
  yoyo: true,
  /* scaleY: 3, */
  repeat: 5,
   backgroundColor: "#3097e0", 
})

//gsap.fromTo
