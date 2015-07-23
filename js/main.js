var width = $(window).width();
$(document).ready(function() { 	

   $('#icon_tabs .item').tab();
   $('.ui.dropdown').dropdown();
   $('.ui.checkbox').checkbox();

  $('.conversation .item.message')//used in dashboard 
	  .on('click', function() {
	    $(this)
	      .hide('.item.message')
	      .transition('slide down')
	    ;
	  })
	;

	$('.compose_message .close')//used in compose page for important messages
	  .on('click', function() {
	    $(this)
	      .closest('.message')
	      .transition('fade')
	    ;
	  })
	;

	$('.compose_content .ui.dropdown')
	  .dropdown({
	    allowAdditions: true
	    // apiSettings: {
	    //   url: '//api.semantic-ui.com/tags/{query}'
	    // }
	  })
	;

$('.toggle_column3').click(function() {// used in the dashboard

  var clicks = $(this).data('clicks');
  if (clicks) {
	$(".conversation_section").css({"width": "75%"});// in dashboard
	$(".all_contacts").css({"width": "100%"});// in contacts
	$(".column3").css({"display": "none"});
  } else {
  	$(".conversation_section").css({"width": "50%"});// in dashboard
  	$(".all_contacts").css({"width": "70%"});// in contacts
  	$(".column3").css({"display": "inline-block"});
  }
  $(this).data("clicks", !clicks);
});




$('.setting_popup i')
 .popup({
    popup : $('.setting_popup_content'),
    on    : 'click',
    position : 'bottom right'
  })
;

$('.ui.comments .from_them .content .author')
 .popup({
    on    : 'hover',
    position : 'top left',
    exclusive: true,
    //inline:  true
  })
;


   
	$(window).resize(function(){//handles some stuff on mobile 
	   console.log('resize called');
	   if(width <= 768){
	       $('#sidebar')
	       	.removeClass('visible')
	       	.removeClass('labeled icon'); 

	       $('#sidebar')
			  .sidebar('attach events', '.sidebar_toggle' )
			  .sidebar('attach events', '#icon_tabs .item', 'hide' )
			;
			
			

			$('.all_tabs')//opens sidebar conversation on all items in .tab_content
			  .sidebar('attach events', '.inbox_content .item' )
			  .addClass('ui left wide sidebar segment')
			;
			

	   }
	   else{
	       $('#sidebar').addClass('visible')
	       $('.all_tabs')//opens sidebar conversation on all items in .tab_content
			  .removeClass('ui right wide sidebar segment')
			;
	   }

	})
	.resize();//trigger the resize event on page load.


});