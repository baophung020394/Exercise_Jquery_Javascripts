$(function () {

	$('.menu').click(function() { $(this).next('').show(); });
	$('body, .a_menu a').click(function() { $('.a_menu').hide(); });
	$('.ndmotkhoi').slideUp();

	$('.motkhoi h3').click(function() {
		$('.ndmotkhoi').slideUp();
		$(this).next().slideToggle();
		$(this).toggleClass('xanh');
	});
});