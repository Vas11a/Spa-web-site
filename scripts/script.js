
$('.nav').click(function (e) {
	$('.nav').removeClass('add-clas')
	$('.burg1').removeClass('add-clas2')
	$('.burg2').removeClass('add-clas3')
})

$('.img-menu').click(function(e) {
	$('.nav').toggleClass('add-clas')
	$('.burg1').toggleClass('add-clas2')
	$('.burg2').toggleClass('add-clas3')
})

$('.button-send').click(function() {
		let name = $('.input-name').val();
		let data = $('.input-data').val();
		let email = $('.input-email').val();
		let time = $('.input-time').val();
		let age = $('.input-age').val();
		let number = $('.input-number').val();
	if (name == '' || data == ''  || email == '' || time == '' || age == '' || number == '') {
		$('.button-send').attr("type" , "button");
		alert('Please fill in al fields')
		$('.forma')[0].reset();
	} else {
		$('.button-send').attr("type", "submit");
		alert('Success!')
	}
});


$('.slider').bxSlider({
	pager: false
});
