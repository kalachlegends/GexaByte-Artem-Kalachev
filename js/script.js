$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:5,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			}
			
		]
	});
});

$(document).ready(function(){
	$('.slidercase').slick({
		arrows:false,
		dots:false,
		slidesToShow:4,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
				
			}
			
		]
	});
});

