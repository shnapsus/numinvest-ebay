$(document).ready(function(){

	$('dl.tabs dt').click(function () {
		$(this).siblings().removeClass('selected').end().next('dd').andSelf().addClass('selected');
	});

	$('.info__l .img').click(function () {
		$(this).parent().find('.cur').removeClass('cur');
		$(this).addClass('cur');
		$('.info__l .imgBig').attr('src', $(this).attr('href'));

		return false;
	});


	jQuery('input[placeholder], textarea[placeholder]').placeholder();
});