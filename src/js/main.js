window.jQuery = $ = require('jquery')

/***************************************
 * Dependencies
 ***************************************/
var developer = require('./vendor/dev')
var validate = require('./vendor/validate')
var carousel = require('./modules/carousel')



/***************************************
 * function
 ***************************************/
$(function() {
	developer('web')
	carousel()
})