$(function(){
  $('input[type=submit').click(sendData);
})

function sendData(e) {
  e.preventDefault();
  
  if (!$('form')[0].checkValidity()) {
    $('#incorrect').show();
    return;
  }
  
  $.ajax({
    url: "https://formspree.io/ymorska56@gmail.com", 
    method: "POST",
    data: {
      yourname: $('#yourname').val(),
      youremail: $('#youremail').val(),
      yourtext: $('#yourtext').val(),
      yourmessage: $('#yourmessage').val(),
    },
    dataType: "json"
  }).done(function(){
    $('form')[0].reset();
    $('#thanks').show();
  })
}