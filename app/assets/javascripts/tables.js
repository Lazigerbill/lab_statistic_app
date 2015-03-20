var ready;
ready = function() { 

	$('.record_index').DataTable({
		searching: false,
	});

	
}

$(document).ready(ready);
$(document).on('page:load', ready);