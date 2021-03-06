var width = $(window).width();
// scroll to most recent messages
$(window).load(function() { 
	$('.comments').prop({ scrollTop: $('.comments').prop("scrollHeight") });
});

$(document).ready(function() { 	

   $('#icon_tabs .item').tab();
   $('.list_details_tabs .item').tab();
   $('.ui.dropdown').dropdown();
   $('.ui.checkbox').checkbox();
 //   $('.ui.card.edit_profile_image .image').dimmer({
	//   on: 'hover'
	// });

   $('#selectall').click(function() {   
    if ($(this).hasClass('checked')) {
        // Iterate each checkbox
        $('.checkbox').each(function() {
            this.checked = true; }); }
    	 else { // Iterate each checkbox 
    	 	$(".checkbox").each(function() { 
    	 		this.checked = false; }); }
	});

  $('.conversation .item.message')//used in dashboard 
	  .on('click', function() {
	    $(this)
	      .hide('.item.message')
	      .transition('slide down')
	    ;
	  })
	;

	// $('.ui.sticky')
	//   .sticky({
	//     context: '.column2'
	//   })
	// ;

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

$('.toggle_column3').click(function() {//

  var clicks = $(this).data('clicks');
  if (clicks) {
	$(".conversation_section").css({"width": "75%"});// in dashboard
	$(".all_contacts").css({"width": "100%"});// in contacts
	$(".all_autoresponders").css({"width": "100%"});// in autoresponders
	$(".all_media").css({"width": "100%"});// in media_items
	$(".all_locations").css({"width": "100%"});// in locations
	$(".all_profile").css({"width": "100%"});// in profile
	$(".media_items").removeClass('ui three column grid').addClass('ui four column grid');// in media
	$(".column3").css({"display": "none"});
  } 
  else {
  	$(".conversation_section").css({"width": "45%"});// in dashboard
  	$(".all_contacts").css({"width": "70%"});// in contacts
  	$(".all_autoresponders").css({"width": "70%"});// in autoresponders
  	$(".all_media").css({"width": "70%"});// in media
  	$(".all_locations").css({"width": "70%"});// in locations
  	$(".all_profile").css({"width": "70%"});// in profile
  	$(".column3").css({"display": "inline-block"});
  	$(".media_items").removeClass('ui four column grid').addClass('ui three column grid');// in media
  }
  $(this).data("clicks", !clicks);
});




$('.setting_popup i')// used in dashboard_menu
 .popup({
    popup : $('.setting_popup_content'),
    on    : 'click',
    position : 'bottom right'
  })
;

$('.list_popup i')// used in autoresponder and group pages
 .popup({
    popup : $('.setting_popup_content'),
    on    : 'click',
    position : 'bottom right'
  })
;

$('.ui.comments .from_them .content .author')// used in contacts page
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
	       	$('#sidebar #icon_tabs')
	       		.removeClass('labeled borderless icon')
	       		.addClass('large')
	       	; 

	       	$('#sidebar')
			  .sidebar('attach events', '.sidebar_toggle' )
			  .sidebar('attach events', '.sidebar_hide', 'hide' )
			  .removeClass('visible')
			;
			$('.options_sidebar')
				.sidebar('attach events', '.options_sidebar_toggle')
				.sidebar('attach events', '.hide_sidebar_toggle', 'hide')
			;
			
			$('.conversation_section')
				.addClass('ui right sidebar')
			;

			$('.conversation_section.ui.sidebar')
				.sidebar({context:$('.dashboard_content')},{scrollLock: true})
			  	//.sidebar('setting', 'transition', 'overlay')
				.sidebar('attach events', '.conversation .item')
				.sidebar('attach events', '.hide_conversation_sidebar', 'hide')
			;
			

			// $('.all_tabs')//opens sidebar conversation on all items in .tab_content
			//   .sidebar('attach events', '.inbox_content .item')
			//   .sidebar({exclusive: true})
			//   .addClass('ui left wide sidebar segment')
			// ;
			

	   }
	   else{
	       	$('#sidebar')
	       		.addClass('visible')
	       	$('.all_tabs')//opens sidebar conversation on all items in .tab_content
			  .removeClass('ui right wide sidebar segment')
			;
	   }

	})
	.resize();//trigger the resize event on page load.

	///////////////////////////image cropper////////////////////////////
	


});