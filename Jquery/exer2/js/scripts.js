$(function () {
	$('.ndmotkhoi').slideUp();

	$('.motkhoi h3').click(function() {
		$('.ndmotkhoi').slideUp();
		$(this).next().slideToggle();
		$(this).toggleClass('xanh');
	});
});