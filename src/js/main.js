window.jQuery = $ = require('jquery')

/***************************************
 * Dependencies
 ***************************************/
var developer = require('./vendor/dev')
var frontrules = require('./vendor/frontrules')
var validate = require('./vendor/validate')
var carousel = require('./modules/carousel')
var slider = require('./modules/slider')
var map = require('./modules/map')


/***************************************
 * function
 ***************************************/
$(function() {
	developer('web')
	carousel()
	slider()
	frontrules()
	/*
	 * mapa
	 */
	var contact = $('#contact-map')

	if(contact.html() != undefined){
		map()
	}

	/**
	 * Banner section
	 */
	$('#slider1').revolution({
		sliderType:"standard",
		sliderLayout:"fullwidth",
		delay:3000,
		spinner:'spiner0',
		navigation: {
			arrows:{
				enable : true
			},
			touch:{
				touchenabled:"on",
				swipe_treshold : 75,
				swipe_min_touches : 1,
				drag_block_vertical:false,
				swipe_direction:"horizontal"
			}
		},
		responsiveLevels:[4096,1024,778,480],
		gridwidth:[1140,800,750,480],
		gridheight:[600,600,980,700],
		gridwidth:1170,
		gridheight:450,
		minHeight:300
	});
})