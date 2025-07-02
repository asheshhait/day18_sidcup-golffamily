var curser = document.querySelector("#curser");
var curser_blur = document.querySelector("#curser_blur");

document.addEventListener("mousemove", function(dets) {
    curser.style.left = dets.x + "px";
    curser.style.top = dets.y + "px";
    curser_blur.style.left = dets.x - 250 + "px";
    curser_blur.style.top = dets.y - 250 + "px";
});


const arrow = document.querySelector("#arrow");

arrow.addEventListener("mouseenter", function(e) {
    const circle = arrow.querySelector("::before");

    const x = e.offsetX;
    const y = e.offsetY;

    arrow.style.setProperty('--x', `${x}px`);
    arrow.style.setProperty('--y', `${y}px`);
});


const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,  // Correct spelling
        start: "top -30%",
        end: "top -80%",
        scrub: 3,
    }
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 3,
    }
});

gsap.from("#page1", {
    scale:1.3,
   
});
gsap.from("#aboutus img, #about_us_in",{
    y:50,
    opacity:0,
    duration:1.3,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3,
    }

})

gsap.from(".card",{
    scale:1,
    opacity:0,
    duration:1.3,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3,
    }

})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller :"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
      
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller :"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
      
    }
})
gsap.from("#page4 h1",{
    y:60,
    
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller :"body",
        start:"top 75%",
        end:"top 70%",
        scrub:4,
      
    }
})
let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#product",
      scroller: "body",
      start: "top 55%",
      end: "top 45%",
      scrub: 4
    }
  });

  t1.from("#left_coca", {
    scale: 1.2,
    opacity: 0,
    duration: 1
  });

  t1.from("#right_descrip", {
    scale: 1.2,
    opacity: 0,
    duration: 1,
    stagger: 0.3 // ✅ Works when targeting multiple elements
  });