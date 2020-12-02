const menu = document.getElementById('menu');
const nav = document.querySelector('nav ul');

// nav animation
menu.addEventListener('click', () => {
	menu.classList.toggle('animation');
	nav.classList.toggle('slide');
});

// loading overlay
$(document).ready(function(){
	
	$.LoadingOverlaySetup({
		background      : "rgba(0, 0, 0, 0.5)",
		image: "assets/image/clock.svg",
		imageAnimation  : "1.3s fadein",
		imageColor      : "#03a9f4"
	});

	document.querySelector('.content').style.opacity = 0;	
	$.LoadingOverlay("show");

	setTimeout(function	(){
		$.LoadingOverlay("hide");
		document.querySelector('.content').style.opacity = 1;
	}, 2000);

});

// change position in mobile 
if( $(window).width() < 768 ){
	$('#descPort').addClass('order-last');
};	

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

// // assign function to onclick property of checkbox
// document.querySelector('#customSwitch').onclick = function() {
//     // access properties using this keyword
//     if ( this.checked ) {
//         alert("Ok");
//     } else {
//         alert("not Ok");
//     }
// };


