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

};

$(document).ready(ready);
$(document).on('page:load', ready);