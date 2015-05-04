var ready;
ready = function() { 

	$.getJSON("/records.json", function(data){
		console.log(data.length)
		console.log(data[1].contact_type);
		// for (i=0; i<data.length; i++) {

		// }

	})

	
}

$(document).ready(ready);
$(document).on('page:load', ready);