const Texts = [
    `About me `,`Contact`, `Project` , `Skills`
  
  ];
  
  let tagCloud = TagCloud('.Sphere', Texts, {
   
      // Sphere radius in px
      radius: 230,
  
      // animation speed
      // slow, normal, fast
      maxSpeed: 'normal',
      initSpeed: 'fast',
  
      // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
      direction: 135,
  
      // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
      keep: true
  
  });
  