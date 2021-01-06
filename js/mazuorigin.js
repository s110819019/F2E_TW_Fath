/*back to top button*/
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});


jQuery('#cody-info ul li').eq(1).on('click', function(){
$('#cody-info').hide();
});


// hamburger_menu
$(document).ready(function () {
    let menu_click = false;
  
    $(".navbar__icon-bar").click(function () {
      menu_click = !menu_click;
      if (menu_click) {
        $(".nav__list").addClass("menu-click");
        $(".navbar__icon-bar").attr("menu-click", "true");
      } else {
        $(".nav__list").removeClass("menu-click");
        $(".navbar__icon-bar").attr("menu-click", "false");
      }
    });
  });


  /*滾動視差*/
$( document).ready(function() {
	var rellax = new Rellax('.rellax');
});


  
  
