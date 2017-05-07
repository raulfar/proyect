$(document).ready(function(){
	$('.menu-entry a').bind('click',function(event){

		var $anchor = $(this);

		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 500);
		
		event.preventDefault();
	});
});