window.jQuery = $ = require('jquery')

/***************************************
 * Dependencies
 ***************************************/
var developer = require('./vendor/dev')
var frontrules = require('./vendor/frontrules')
var validate = require('./vendor/validate')
var carousel = require('./modules/carousel')
var slider = require('./modules/slider')



/***************************************
 * function
 ***************************************/
$(function() {
	developer('web')
	carousel()
	slider()
	frontrules()

	/**
	 * Banner section
	 */
	$('.tp-banner').revolution({
		delay:5000,
		startwidth:1170,
		startwidth:400,
		hideThumbs:10,
		touchenabled:"on",
		onHoverStop:"off"
	});
})