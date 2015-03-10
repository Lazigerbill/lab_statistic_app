// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

var ready;
ready = function() { 
	// hide/unhide and 'other' for inquiry type
	$('#record_question').change(function(){
		if ($(this).val()==='other') {
			$('#record_other_inquiry_details').show();
		} else {
			$('#record_other_inquiry_details').hide();
			$('#record_other_inquiry_details').val('');
		}
	})

	
	// to overwrite 'other lab resource' when checkbox is checked
	$('#record_other_res_details').keyup(function(){
		if ($(this).val()) {
			$('#record_other_res').prop("checked", true);
		} else {
			$('#record_other_res').prop("checked", false);
		}
	})
	$('#record_other_res').change(function(){
		$('#record_other_res_details').val('');
	})

	
}

$(document).ready(ready);
$(document).on('page:load', ready);