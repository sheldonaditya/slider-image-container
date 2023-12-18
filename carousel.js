$('.owl-carousel').owlCarousel({
	
//autoplay Controls
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,


//loop
    loop:true,
	
//spacing
    margin:10,

	
//navigation
    nav:true,
    dots: true,
	  navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
//responsiveness
	responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
