$(document).ready(function () {
  const featureTriggers = document.querySelectorAll(".feature-trigger");

  featureTriggers.forEach(addTimeline);
  
  function addTimeline(guide, index){
    const guideText = guide.querySelectorAll(".gd-text");
    const timeline = gsap.timeline({
      scrollTrigger:{
        trigger: guide,
        start: "center bottom",
        end: "botttom center",
        ease: "sine",
        toggleActions: "play none none reverse"
      }
    })
    .from(guideText, {
      x: +200,
      opacity: 0,
      duration: 0.5
    })
  }
  function addTimeline(feature, index) {
    const featureImage1 = feature.querySelector(".feature-image1");
    const featureText1 = feature.querySelector(".feature-text1");
    const featureImage2 = feature.querySelector(".feature-image2");
    const featureText2 = feature.querySelector(".feature-text2");
    const featureTitle = feature.querySelector(".feature-title");
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: feature,
        start: "center bottom",
        end: "botttom center",
        ease: "sine",
        // scrub: true,
        // markers: true,
        toggleActions: "play none none reverse"
      }
    })
    .from(featureImage1, {
      x: +100,
      opacity: 0,
      duration: 0.5
    })
    .from(featureImage2, {
      x: -100,
      opacity: 0,
      duration: 0.5
    })
    .from(featureText1, {
      x: -100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
    }, "-=0.5")
    .from(featureText2, {
      x: +100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
    }, "-=0.5")
    .from(featureTitle, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
    }, "-=0.5");
  }
  gsap.utils.toArray("section").forEach((section, i) => {
    let bg = section.querySelector(".bg"); 
    if(i>=0){
      gsap.to(bg, {
        backgroundPosition: `50% 250px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: true,
          // markers: true,
          // id: i,
        },
      });
    } 
  });


});
