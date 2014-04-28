$(document).ready(function(){

	$('dl.tabs dt').click(function () {
		$(this).siblings().removeClass('selected').end().next('dd').andSelf().addClass('selected');
	});

	$('.info__l .img').click(function () {
		$(this).parent().find('.cur').removeClass('cur');
		$(this).addClass('cur');
		$('.info__l .imgBig').attr('src', $(this).attr('href'));

		$('.counter__1').text(($(this).index()+1));

		return false;
	});

	if($('.info__l .img').length>0){
		$('.counter__2').text($('.info__l .img').length);
	}


	jQuery('input[placeholder], textarea[placeholder]').placeholder();
});