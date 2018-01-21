$(document).ready(function() {
	$('.toggle-nav').click(function(e) {
		if ($(window).width() < 860) {
			$(".toggle-nav").toggleClass('active');
			$(".menu ul").toggleClass('active');
		}
		e.preventDefault();
	});
});

$(document).ready(function() {
	$('.menu ul').click(function(e) {
		if ($(window).width() < 860) {
			$(".toggle-nav").toggleClass('active');
			$(".menu ul").toggleClass('active');
		}
	});
});



var toAppend = '<h1 class="anchor" id="C1">DR</h1>';


$(document).ready(function() {
	$('.dugme').click(function(e) {
		$(".text").append(toAppend);
	})
})