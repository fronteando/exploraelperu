var frontrules = function() {
	var navBar = $('#nav-bar')
	var navLen = $('.lenguage-nav')

	$('#openNab').on('click', function(){
		if($(this).hasClass('show')){
			navBar.animate({
				top: "+=330",
				opacity: "1"
			}, 500, function() {
				// Animation complete.
			});
			$(this).html('<span class="ico ico-isotipo"></span>').removeClass('show').addClass('hide');
		} else {   	
			navBar.animate({
				top: "-=330",
				opacity: "0"
			}, 500, function() {
				// Animation complete.
			});
			$(this).html('<span class="ico ico-isotipo"></span>').removeClass('hide').addClass('show');    
		}
	});

	$('.lenguage-select').on('click', function(){
		if($(this).hasClass('show')){
			navLen.animate({
				height: "-=125",
				opacity: "0"
			}, 500, function() {
				// Animation complete.
			});
			$(this).removeClass('show').addClass('hide');
		} else {   	
			navLen.animate({
				height: "+=125",
				opacity: "1"
			}, 500, function() {
				// Animation complete.
			});
			$(this).removeClass('hide').addClass('show');    
		}
	});
}
module.exports = frontrules;