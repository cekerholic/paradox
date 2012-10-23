(function($) {

	$.fn.parallax = function(options) {
		
		// All Parallax Options
		var defaults = {
			speed: 		700,
			horizontal:	40,
			vertical:	40,
			bounce:		true,
			repeat:		false,
			fade:		false,
			scroll:		false,
			easing:		'swing'
		};
		
		settings = $.extend({}, defaults, options);
		
		var $top = $(window).scrollTop();
		
		this.each(function() {
			var $item = $(this);
			$item.each(function animx(){
			
				// Fading Parallax onScroll
				if (settings.scroll) {
					$(window).scroll(function(){
						var $elemtop = $(window).scrollTop();
						if ( $top < $elemtop ) {
							$item.animate({
								left:settings.horizontal,
								top:settings.vertical,
								opacity:settings.fade ? 0 : 1
							}, settings.speed, settings.easing)
						}
						else {
							$item.animate({
								left:0,
								top:0,
								opacity:1
							}, settings.speed, settings.easing)
						}
						$top = $elemtop
					});
				}
				
				//Default Parallax
				else {
					$item.animate({
						left:settings.horizontal,
						top:settings.vertical,
						opacity:settings.fade ? 0 : 1
					}, settings.speed, settings.easing,
					function() {
						if (settings.bounce) {
							$item.animate({
								left:0,
								top:0,
								opacity:1
							}, settings.speed, settings.easing,
							function(){
								if (settings.repeat) {
									return animx()
								}
							})
						}
					});
				}
			});
		});
		return this;
	};

})(jQuery);