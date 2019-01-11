

// EVENT HANDLERS
// NAVIGATION
// HOME
$('.home-link').on('click', e => {
	e.preventDefault();
	console.log('home');
	$('#landing-overview').removeClass('hidden');
	$('#about').addClass('hidden');
});

//ABOUT
$('.about-link').on('click', e => {
	e.preventDefault();
	console.log('about');
	$('#landing-overview').addClass('hidden');
	$('#about').removeClass('hidden');
  $("#about").fadeIn(3000)
})

// SCROLL HANDLERS
// HORIZONTAL MENU COLOR onScroll
 $(window).scroll(function(){
	 let scroll = $(window).scrollTop();

	 if(scroll >= 640 ) {
	 $("#menu-container").addClass("scrolling");
	} else {
			$("#menu-container").removeClass("scrolling");
	}
 })