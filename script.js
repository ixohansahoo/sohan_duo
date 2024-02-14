function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

var crsr=document.querySelector(".cursor")
var main=document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+1+"px";
    crsr.style.top=dets.y+1+"px";
})




let cur =document.getElementById("cur")
var page1_vid=document.querySelector("#page1_vid")
page1_vid.addEventListener("mouseenter",function(dets){
    crsr.style.width="100px"
    crsr.style.height="20px"
    crsr.style.borderRadius="15px"
    cur.innerText="Sound On"
    cur.style.mix-blend-mode("difference")
    crsr.style.cursor="pointer"

        
})
page1_vid.addEventListener("mouseleave",function(dets){
    crsr.style.width="20px"
    crsr.style.height="20px"
    crsr.style.borderRadius="50%"
    cur.innerText=""
})

let vid = document.getElementById("page1_vid");

page1_vid.addEventListener("click",function(dets){
    
    if(vid.muted === false){
        vid.muted = true
        cur.innerText="Sound Off"
    }
    else{
        vid.muted = false
        cur.innerText="Sound On"
    }
})

vid.muted = true;


var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start: "top 27%",
        end:"top 0",
        scrub:3
    }
})


tl.to(".page1 h1",{
    x:-35,
},"anim")
tl.to(".page1 ",{
    
},"anim")
tl.to(".page1 h2",{
    x:35,
},"anim")
 tl.to(".page1 video", {
      width: "90%",
      
 }, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -15%",
        end: "top -10%",
        scrub: 3
    }
})
tl2.to(".main", {
    backgroundColor: "#fff",
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -230%",
        end: "top -260%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#0F0D0D",
    Color:"#111"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att=elem.getAttribute("data-img")
        crsr.style.width="500px"
        crsr.style.height="300px"
        crsr.style.borderRadius="5%"
        
        crsr.style.backgroundImage=`url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        var att=elem.getAttribute("data-img")
        crsr.style.width="20px"
        crsr.style.height="20px"
        crsr.style.borderRadius="50%"
        
        crsr.style.backgroundImage=`none`
    })
})

var h4 = document.querySelectorAll("#nav-part2 h4")
var purple = document.querySelector(".purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
        
        
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})
  


var page6_cir=document.querySelector(".page-6-top-right")

page6_cir.addEventListener("mouseenter",function(dets){
    crsr.style.width="0px"
    crsr.style.height="0px"
    

        
})
page6_cir.addEventListener("mouseleave",function(dets){
    crsr.style.width="20px"
    crsr.style.height="20px"
    crsr.style.borderRadius="50%"
    
})


