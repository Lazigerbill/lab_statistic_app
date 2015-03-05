var ready;
ready = function() { 
  $('#pic-upload').on('change', function(event) {
    var files = event.target.files;
    var image = files[0]
    var reader = new FileReader();
    reader.onload = function(file) {
      var img = new Image();
      img.src = file.target.result;
      img.height = 200;
      console.log(img);
      $('#preview').html(img);
    }
    reader.readAsDataURL(image);
    console.log(files);
  });

  $('#cropbox').Jcrop();

  $('#crop-modal-trigger').css('cursor', 'pointer');

  $('#crop-modal-trigger').on("mouseenter", function(){
    $(this).css({
      "opacity":"0.5"
    });
  });
  $('#crop-modal-trigger').on("mouseleave", function(){
    $(this).css({
      "opacity":"1"
    });
  });
    
  $('#crop-modal-trigger').click(function(){
    $('#jcrop-modal').modal('show');
  });

}

$(document).ready(ready);
$(document).on('page:load', ready);