var validate = function() {
	$('#contract').validate({
		rules: {
			name: {
				required: true
			},
			mail: {
				required: true
			},
			date: {
				required: true
			},
			dni: {
				required: true,
				minlength: 8,
				maxlength: 8
			},
			phone: {
				required: true,
				minlength: 9,
				maxlength: 9
			},
			checkbox: {
				required: true
			}
		},
		errorPlacement: function() {
			return false
		},
		submitHandler: function(form) {
			console.log('enviar')
		}
	})
}

module.exports = validate;