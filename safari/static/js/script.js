$(document).ready(function(){
	$('.carousel').slick({
		dots: false,
		autoplay: true,
  		autoplaySpeed: 2000,
		infinite: true,
		speed: 1000,
		fade: true,
		cssEase: 'linear'
	});

	$('.signup').click(function() {

		ga('send', 'pageview', {
				'page': '/surf-safari-page',
				'hitCallback': function() {
				console.log("hitCallback");
			}
		});
	});

	$('#contact').click(function() {
		ga('send', 'event', 'contact', 'click');
	});
});