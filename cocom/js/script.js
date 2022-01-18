(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	var container = $('.card-outer .container');
	var innerbox = $('.card-outer .card-inner-box');
	var card_items = $('.card-item');
	var animation_in = container.data('animation-in');
	var animation_out = container.data('animation-out');
	
	$('.main-menu').on('click', 'a', function(){

		// return false;
		/* vars */
		var id = $(this).attr('href');
		// var h = parseFloat($(id).offset().top);
		var card_item = $(id);
		var menu_items = $('.main-menu li');
		var menu_item_home = $('.main-menu li.home');
		var menu_item = $(this).closest('li');
		// var d_lnk = $('.lnks .lnk.discover');
		
		/* if desktop */
		if(!menu_item.hasClass('active') & $('#home').length) {
			Vue.createApp(app).mount('#app')
			// console.log('click',animation_in,animation_out,id,card_item,menu_items,menu_item_home,menu_item)
			
			/* close card items */
			menu_items.removeClass('active');
			// container.find(card_items).removeClass('animated '+animation_in);

			// if($(container).hasClass('opened')) {
			// 	container.find(card_items).addClass('animated '+animation_out);
			// }

			/* open card item */
			menu_item.addClass('active');
			container.addClass('opened');
			// container.find(card_item).removeClass('animated '+animation_out);
			// container.find(card_item).addClass('animated '+animation_in);
			
			$(card_items).addClass('hide-item');
			
			$(card_item).removeClass('hide-item');
			$(card_item).addClass('active');
		} 

		// if(!menu_item_home.hasClass('active')) {
		// 	$(innerbox).addClass('offsetleft');
		// }else {
		// 	$(innerbox).removeClass('offsetleft');
		// }
		
		return false;
	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {

	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();

	});


/* ==========================================================================
   When page is resized
   ========================================================================== */
	
	$(window).on('resize', function() {
		
	});

/* ==========================================================================
   When document is Resize, do
   ========================================================================== */
	

})(window.jQuery);
