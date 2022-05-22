

$('.img-menu').click(function(e) {
	$('.nav').toggleClass('add-clas')
	$('.burg1').toggleClass('add-clas2')
	$('.burg2').toggleClass('add-clas3')
});

$('.button-send').click(function() {
		let name = $('.input-name').val();
		let data = $('.input-data').val();
		let email = $('.input-email').val();
		let time = $('.input-time').val();
		let age = $('.input-age').val();
		let number = $('.input-number').val();
	if (name == '' || data == ''  || email == '' || time == '' || age == '' || number == '') {
		alert('Please fill in al fields')
	} else {
		$('.forma')[0].reset();
		setTimeout(function(){
			alert('Success!')
		}, 1500)
	}
});


$('.slider').bxSlider({
	pager: false
});