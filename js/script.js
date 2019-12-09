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

//Important Note

//This pen Copyrighted (c) 2016 by Nikhil Krishnan (https://codepen.io/nikhil8krishnan/pen/ALLLkv). If you have any query please let me know at nikhil8krishnan@gmail.com.

            

//material contact form animation
var floatingField = $('.material-form .floating-field').find('.form-control');
var formItem = $('.material-form .input-block').find('.form-control');

//##case 1 for default style
//on focus
formItem.focus(function() {
  $(this).parent('.input-block').addClass('focus');
});
//removing focusing
formItem.blur(function() {
  $(this).parent('.input-block').removeClass('focus');
});

//##case 2 for floating style
//initiating field
floatingField.each(function() {
  var targetItem = $(this).parent();
  if ($(this).val()) {
    $(targetItem).addClass('has-value');
  }
});

//on typing
floatingField.blur(function() {
  $(this).parent('.input-block').removeClass('focus');
  //if value is not exists
  if ($(this).val().length == 0) {
    $(this).parent('.input-block').removeClass('has-value');
  }else{
      $(this).parent('.input-block').addClass('has-value');
  }
});

//dropdown list
// $('body').click(function() {
//   if ($('.custom-select .drop-down-list').is(':visible')) {
//     $('.custom-select').parent().removeClass('focus');
//   }
//   $('.custom-select .drop-down-list:visible').slideUp();
// });
// $('.custom-select .active-list').click(function() {
//   $(this).parent().parent().addClass('focus');
//   $(this).parent().find('.drop-down-list').stop(true, true).delay(10).slideToggle(300);
// });
// $('.custom-select .drop-down-list li').click(function() {
  // var listParent = $(this).parent().parent();
  //listParent.find('.active-list').trigger("click");
//   listParent.parent('.select-block').removeClass('focus').addClass('added');
//   listParent.find('.active-list').text($(this).text());
//   listParent.find('input.list-field').attr('value', $(this).text());
// });


// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.sidenav');
//   // var instances = M.Sidenav.init(elems, options);
// });

// Or with jQuery

$(document).ready(function(){
  $('.sidenav').sidenav({
    // closeOnClick: true
  });


$("#button").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} ,1000 );
});
});

