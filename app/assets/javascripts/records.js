// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

var ready;
ready = function() { 
	// hide/unhide and 'other' for inquiry type
	$('#record_question').change(function(){
		if ($(this).val()==='other') {
			$('#other-inquiry-textbox').show();
		} else {
			$('#other-inquiry-textbox').hide();
			$('#other-inquiry-option').val('other');
			$('#other-inquiry-textbox').val('');
		}
	})
	$('#other-inquiry-textbox').keyup(function(){
		$('#other-inquiry-option').val("other - " + $('#other-inquiry-textbox').val());	
	});
	
	// to overwrite 'other lab resource' when checkbox is checked
	$('#record_other').keyup(function(){
		if ($(this).val()) {
			$('#other-res-checkbox').prop("checked", true);
		} else {
			$('#record_other').prop("checked", false);
		}
	})
	$("#other-res-checkbox").change(function(){
		$('#record_other').val('');
	})

	
}

$(document).ready(ready);
$(document).on('page:load', ready);