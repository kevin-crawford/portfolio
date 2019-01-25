

// SCROLL HANDLERS
// HORIZONTAL MENU COLOR onScroll
 $(window).scroll(function(){
	 let scroll = $(window).scrollTop();
	 if(scroll >= 200 ) {
	 $("#menu-container").addClass("scrolling");
	
	} else {
			$("#menu-container").removeClass("scrolling");
	}
 });

// PROJECTS PAGE 
// tech-icon click handlers

// automate project
$('#automate-fe-btn').on('click', e => {
	e.preventDefault;
	$('#automate-fe-btn').addClass('highlight-red');
	$('#automate-do-btn').removeClass('highlight-red');
	$('#automate-be-btn').removeClass('highlight-red');

	$('#automate-fe-icons').removeClass('hidden');
	$('#automate-be-icons').addClass('hidden');
	$('#automate-do-icons').addClass('hidden');
});

$('#automate-be-btn').on('click', e => {
	e.preventDefault;
	$('#automate-be-btn').addClass('highlight-red');
	$('#automate-fe-btn').removeClass('highlight-red');
	$('#automate-do-btn').removeClass('highlight-red');

	$('#automate-be-icons').removeClass('hidden');
	$('#automate-fe-icons').addClass('hidden');
	$('#automate-do-icons').addClass('hidden');
});

$('#automate-do-btn').on('click', e => {
	e.preventDefault;
	$('#automate-do-btn').addClass('highlight-red');
	$('#automate-fe-btn').removeClass('highlight-red');
	$('#automate-be-btn').removeClass('highlight-red');
	
	$('#automate-do-icons').removeClass('hidden');
	$('#automate-fe-icons').addClass('hidden');
	$('#automate-be-icons').addClass('hidden');
});

// tune in project
$('#tunein-fe-btn').on('click', e => {
	e.preventDefault;
	$('#tunein-fe-btn').addClass('highlight-red');
	$('#tunein-do-btn').removeClass('highlight-red');
	$('#tunein-be-btn').removeClass('highlight-red');

	$('#tunein-fe-icons').removeClass('hidden');
	$('#tunein-be-icons').addClass('hidden');
	$('#tunein-do-icons').addClass('hidden');
});

$('#tunein-be-btn').on('click', e => {
	e.preventDefault;
	$('#tunein-be-btn').addClass('highlight-red');
	$('#tunein-fe-btn').removeClass('highlight-red');
	$('#tunein-do-btn').removeClass('highlight-red');

	$('#tunein-be-icons').removeClass('hidden');
	$('#tunein-fe-icons').addClass('hidden');
	$('#tunein-do-icons').addClass('hidden');
});

$('#tunein-do-btn').on('click', e => {
	e.preventDefault;
	$('#tunein-do-btn').addClass('highlight-red');
	$('#tunein-fe-btn').removeClass('highlight-red');
	$('#tunein-be-btn').removeClass('highlight-red');

	$('#tunein-do-icons').removeClass('hidden');
	$('#tunein-fe-icons').addClass('hidden');
	$('#tunein-be-icons').addClass('hidden');
});

// sneakerlocker project

$('#sneakerlocker-fe-btn').on('click', e => {
	e.preventDefault;
	$('#sneakerlocker-fe-btn').addClass('highlight-red');
	$('#sneakerlocker-do-btn').removeClass('highlight-red');
	$('#sneakerlocker-be-btn').removeClass('highlight-red');

	$('#sneakerlocker-fe-icons').removeClass('hidden');
	$('#sneakerlocker-be-icons').addClass('hidden');
	$('#sneakerlocker-do-icons').addClass('hidden');
});

$('#sneakerlocker-be-btn').on('click', e => {
	e.preventDefault;
	$('#sneakerlocker-be-btn').addClass('highlight-red');
	$('#sneakerlocker-fe-btn').removeClass('highlight-red');
	$('#sneakerlocker-do-btn').removeClass('highlight-red');

	$('#sneakerlocker-be-icons').removeClass('hidden');
	$('#sneakerlocker-fe-icons').addClass('hidden');
	$('#sneakerlocker-do-icons').addClass('hidden');
});

$('#sneakerlocker-do-btn').on('click', e => {
	e.preventDefault;
	$('#sneakerlocker-do-btn').addClass('highlight-red');
	$('#sneakerlocker-fe-btn').removeClass('highlight-red');
	$('#sneakerlocker-be-btn').removeClass('highlight-red');

	$('#sneakerlocker-do-icons').removeClass('hidden');
	$('#sneakerlocker-fe-icons').addClass('hidden');
	$('#sneakerlocker-be-icons').addClass('hidden');
});
