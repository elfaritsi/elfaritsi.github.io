const menu = document.getElementById('menu');
const nav = document.querySelector('nav ul');

// nav animation
menu.addEventListener('click', () => {
	menu.classList.toggle('animation');
	nav.classList.toggle('slide');
});

// // loading overlay
// $(document).ready(function(){
	
// 	$.LoadingOverlaySetup({
// 		background      : "rgba(0, 0, 0, 0.5)",
// 		image: "assets/image/clock.svg",
// 		imageAnimation  : "1.3s fadein",
// 		imageColor      : "#03a9f4"
// 	});

// 	$.LoadingOverlay("show");

// 	setTimeout(function(){
// 		$.LoadingOverlay("hide");
// 		document.querySelector('.content').style.opacity = 1;
// 	}, 2000);

// });


// swiper
var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 10,
      // init: false,
      pagination: {
      	el: '.swiper-pagination',
      	clickable: true,
      },
      breakpoints: {
      	640: {
      		slidesPerView: 4,
      		spaceBetween: 20,
      	},
      	768: {
      		slidesPerView: 4,
      		spaceBetween: 40,
      	},
      	1024: {
      		slidesPerView: 5,
      		spaceBetween: 40,
      	},
      }
});


// switch lang
const lang = document.getElementById('switchLang');
lang.addEventListener('change', function(){
      const indo = document.querySelectorAll('.in');
      const eng = document.querySelectorAll('.en');
      if(this.value == 'Indonesia'){
            for(let i = 0; i<indo.length; i++){
                  indo[i].style.display = 'block';
            }
            for(let j = 0; j<eng.length; j++){
                  eng[j].style.display = 'none';
            }
      }else{
            for(let i = 0; i<indo.length; i++){
                  indo[i].style.display = 'none';
            }
            for(let j = 0; j<eng.length; j++){
                  eng[j].style.display = 'block';
            }
      }

});

window.addEventListener('load', () =>{
	AOS.init();
});
