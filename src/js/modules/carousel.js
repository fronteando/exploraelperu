var carousel = function() {
	var owl = $('#tours-owl')

	owl.owlCarousel({
		items: 3,
		loop:true,
		margin: 22,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			768:{
				items:3
			},
			1200:{
				items:3
			}
		}
	})
	$('.owl-next').click(function() {
		owl.trigger('next.owl.carousel', [300]);
	})
	$('.owl-prev').click(function() {
		owl.trigger('prev.owl.carousel', [300]);
	})

	var owlToursOf = $('#toursofert-owl')

	owlToursOf.owlCarousel({
		items: 4,
		loop:true,
		margin: 22,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			768:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	$('.owl-next').click(function() {
		owlToursOf.trigger('next.owl.carousel', [300]);
	})
	$('.owl-prev').click(function() {
		owlToursOf.trigger('prev.owl.carousel', [300]);
	})

	var owlBlog = $('#blog-owl')

	owlBlog.owlCarousel({
		items: 4,
		loop:true,
		margin: 22,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			768:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	$('.owl-next').click(function() {
		owlBlog.trigger('next.owl.carousel', [300]);
	})
	$('.owl-prev').click(function() {
		owlBlog.trigger('prev.owl.carousel', [300]);
	})
}

module.exports = carousel;