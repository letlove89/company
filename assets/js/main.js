/* ------------------------------- CAROUSEL ------------------------------- */

$(document).ready(function(){  
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        center: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
})   

/* ------------------------------- SCROLL MENU ------------------------------- */



const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".menu__nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".menu__nav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

/* ------------------------------- MENU HAMBERGER ------------------------------- */

var navigation = {
  init:function(){
      this.navigationResponsive();
  },
  navigationResponsive:function(){
      var listMenu = document.querySelector('.menu .menu__nav .nav');
      var buttonMenu = document.querySelector('.menu .button__menu');
      
      buttonMenu.addEventListener('click',function(){
      listMenu.style.setProperty("--childenNumber", listMenu.children.length);

      buttonMenu.classList.toggle("active");
      listMenu.classList.toggle('java');  /* click chuot 2 lan 'toggle' */
      });
  },
}
navigation.init();

/* ------------------------------- FOOTER ------------------------------- */

var btn = $('.button-footer');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0});
});


