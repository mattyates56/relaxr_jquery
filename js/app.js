$('.readmore').on('click', function(event) {
	event.preventDefault();
});

$('.readmore').on('click', function(){
	$('#show-this-on-click').slideDown();
	$('.readmore').hide();
	$('.readless').show();
});

$('.readless').on('click', function(event) {
	event.preventDefault();
});

$('.readless').on('click', function(){
	$('#show-this-on-click').slideUp();
	$('.readless').hide();
	$('.readmore').show();
});

$('.learnmore').on('click', function(event) {
	event.preventDefault();
});

$('.learnmore').on('click', function(){
	$('.hide').removeClass('hide');
	$('.learnmoretext').slideDown();
	$('.learnmore').hide();
});