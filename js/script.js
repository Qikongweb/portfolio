// $( document ).ready(function() {
//     $('.dropdown-trigger').click(function(e){
//         e.stopPropagation();
//         if($(this).children().text() === "menu"){        
//             $('#navItem').css('display','block');
//             $(this).children().html('<i class="material-icons right">close</i>');
//         }
//         else{
//             $('#navItem').css('display','none');
//             $(this).children().html('<i class="material-icons right">menu</i>')
//         }

//     });

// });
// $(document).click(function(){
//     $('#navItem').css('display','none');
//     $('.dropdown-trigger').children().html('<i class="material-icons right">menu</i>')
// });


//material contact form animation
var floatingField = $('.material-form .floating-field').find('.form-control');
var formItem = $('.material-form .input-block').find('.form-control');

//##case 1 for default style
//on focus
formItem.focus(function () {
  $(this).parent('.input-block').addClass('focus');
});
//removing focusing
formItem.blur(function () {
  $(this).parent('.input-block').removeClass('focus');
});

//##case 2 for floating style
//initiating field
floatingField.each(function () {
  var targetItem = $(this).parent();
  if ($(this).val()) {
    $(targetItem).addClass('has-value');
  }
});

//on typing
floatingField.blur(function () {
  $(this).parent('.input-block').removeClass('focus');
  //if value is not exists
  if ($(this).val().length == 0) {
    $(this).parent('.input-block').removeClass('has-value');
  } else {
    $(this).parent('.input-block').addClass('has-value');
  }
});



$(document).ready(function () {
  // navbar
  $('.sidenav').sidenav({
    // closeOnClick: true
  });

// homepage arrow
  $("#button").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: position
    }, 1000);
  });

  // contact icon link
  $('#linkin').click(function(){
    window.location.href = "http://linkedin.com/in/claire-qi-kong-454645174";
  })
});

