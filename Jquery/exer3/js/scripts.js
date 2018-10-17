$(function(){
	// $('.menutren ul li a').on('click',function(event){
	// 	event.preventDefault();

	// 	$('body').animate({ scrollTop: 1600}, 1500);
	// });
	$('.menutren ul li:nth-child(1) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$('body').animate({ scrollTop: 1600}, 1500);
	});
});