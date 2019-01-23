

// CONTACT

// SCROLL HANDLERS
// HORIZONTAL MENU COLOR onScroll
 $(window).scroll(function(){
	 let scroll = $(window).scrollTop();
	 if(scroll >= 200 ) {
	 $("#menu-container").addClass("scrolling");
	
	} else {
			$("#menu-container").removeClass("scrolling");
	}
 })

 $(window).scroll(function(){
	 let projectScrollHover = $(window).scrollTop();
	 if(projectScrollHover >= 500) {
		 $('#automate-tech').show(1000);
		 $('#automate-info').show(1000);
	 } else {
		 $('#automate-tech').hide('slow');
		 $('#automate-info').hide('slow')
	 }
 })

 $(window).scroll(function(){
	let projectScrollHover = $(window).scrollTop();
	if(projectScrollHover >= 1000) {
		$('#tunein-tech').show('slow');
		$('#tunein-info').show('slow');
	} else {
		$('#tunein-tech').hide('slow');
		$('#tunein-info').hide('slow')
	}
})

$(window).scroll(function(){
	let projectScrollHover = $(window).scrollTop();
	if(projectScrollHover >= 1800) {
		$('#sneakerlocker-tech').show('slow');
		$('#sneakerlocker-info').show('slow');
	} else {
		$('#sneakerlocker-tech').hide('slow');
		$('#sneakerlocker-info').hide('slow')
	}
})





 // PROJECTS PAGE 

// tech-icon click handlers

// automate project
$('#automate-fe-btn').on('click', e => {
	e.preventDefault;
	$('#automate-fe-icons').removeClass('hidden');
	$('#automate-be-icons').addClass('hidden');
	$('#automate-do-icons').addClass('hidden');
});

$('#automate-be-btn').on('click', e => {
	e.preventDefault;
	$('#automate-be-icons').removeClass('hidden');
	$('#automate-fe-icons').addClass('hidden');
	$('#automate-do-icons').addClass('hidden');
});

$('#automate-do-btn').on('click', e => {
	e.preventDefault;
	$('#automate-do-icons').removeClass('hidden');
	$('#automate-fe-icons').addClass('hidden');
	$('#automate-be-icons').addClass('hidden');
})

// tune in project
$('#tunein-fe-btn').on('click', e => {
	e.preventDefault;
	$('#tunein-fe-icons').removeClass('hidden');
	$('#tunein-be-icons').addClass('hidden');
	$('#tunein-do-icons').addClass('hidden');
});

$('#tunein-be-btn').on('click', e => {
	e.preventDefault;
	$('#tunein-be-icons').removeClass('hidden');
	$('#tunein-fe-icons').addClass('hidden');
	$('#tunein-do-icons').addClass('hidden');
});

$('#tunein-do-btn').on('click', e => {
	e.preventDefault;
	$('#tunein-do-icons').removeClass('hidden');
	$('#tunein-fe-icons').addClass('hidden');
	$('#tunein-be-icons').addClass('hidden');
})

// sneakerlocker project

$('#sneakerlocker-fe-btn').on('click', e => {
	e.preventDefault;
	$('#sneakerlocker-fe-icons').removeClass('hidden');
	$('#sneakerlocker-be-icons').addClass('hidden');
	$('#sneakerlocker-do-icons').addClass('hidden');
});

$('#sneakerlocker-be-btn').on('click', e => {
	e.preventDefault;
	$('#sneakerlocker-be-icons').removeClass('hidden');
	$('#sneakerlocker-fe-icons').addClass('hidden');
	$('#sneakerlocker-do-icons').addClass('hidden');
});

$('#sneakerlocker-do-btn').on('click', e => {
	e.preventDefault;
	$('#sneakerlocker-do-icons').removeClass('hidden');
	$('#sneakerlocker-fe-icons').addClass('hidden');
	$('#sneakerlocker-be-icons').addClass('hidden');
})

 // animation to hide and show project information
//  $('#automate-thumbnail').click(function() {
// 	$('#automate-tech').toggle('slow');
// 	$('#automate-info').toggle('slow');
//  })

//  $('#tunein-thumbnail').click(function() {
// 	$('#tunein-tech').toggle('slow');
// 	$('#tunein-info').toggle('slow');
//  })

//  $('#sneakerlocker-thumbnail').click(function() {
// 	$('#sneakerlocker-tech').toggle('slow');
// 	$('#sneakerlocker-info').toggle('slow');
//  })