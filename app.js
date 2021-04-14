
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.from(".navBar", { y: "-10rem", duration: 1 });
tl.from(".navBar .navBar__menu ul li", {
  y: "-2rem",
  opacity: 0,
  duration: 1,
  stagger: 0.25,
});
tl.to(
  ".sec1__content .sec1__contentDetail h1",
  { y: "0rem", duration: 1, stagger: 0.25 },
  "=-1"
);
tl.from(".sec1__imgBx img", { opacity: 0, x: "50%", duration: 1.5 });
tl.from(
  ".sec1__imgBx .sec1__design1",
  { opacity: 0, x: "3rem", duration: 1.5 },
  "=-1"
);
tl.from(
  ".sec1__imgBx .sec1__design2",
  { opacity: 0, x: "-3rem", duration: 1.5 },
  "=-1"
);
tl.from(
  ".sec1__design3",
  { opacity: 0, x: "-30%", duration: 1.5 },
  "=-2"
);
tl.from(".sec1__design4", { opacity: 0, duration: 1.5 }, "=-2");
tl.from(".sec1__content a", { opacity: 0, duration: 1.5 }, "=-3");


var sec1__menuIcon = document.querySelector(".sec1__menuIcon");
var menuBar = document.querySelector(".menuBar");
sec1__menuIcon.addEventListener("click", function () {
  sec1__menuIcon.classList.toggle("active");
  menuBar.classList.toggle("active");
});


window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.fa');
    scroll.classList.toggle("active",window.scrollY>500)
})
function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}