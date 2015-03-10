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
	
	
}

$(document).ready(ready);
$(document).on('page:load', ready);