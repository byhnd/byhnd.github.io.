new Vue({
  el: '#app',
  data() {
    return {
      bg: 'bio' };

  } });


$(window).scroll(function(){
  scroll();
});

scroll();

function scroll(){
  var top = $('html, body').scrollTop();
  var el = $("#distort").find("feDisplacementMap");
  
  el.attr('scale', top);
  $("h1").css('opacity', 1 - (top * 0.007))
}






const logo = document.querySelectorAll("p.sub1 span");

const symbol = document.querySelectorAll(".symbol span");

let tl = gsap.timeline();

tl.from(logo, {

  duration: 1.5,

  opacity: 0,

  // ease: "bounce",

  right: "100%",

  stagger: .2,

});

tl.from(symbol, {

  opacity: 0,

  duration: 1,

  stagger: 0.1,

});

tl.to(".line-under", {

  duration: 1,

  width: "100%",

}, "<");

tl.to(".line-under", {

  duration: 1,

  width: "19.3vw",

  ease: "bounce"

},"<1");
