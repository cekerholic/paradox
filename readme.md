# PARADOX: A Simple jQuery Parallax Plugin
This a simple parallax plugin that rely on jQuery `.animate()`. Paradox work by simply move the element to any given position.

### Basic CSS
All your need to do is declare the position of your parallax, e.g. :

	.parallax {
		position: absolute;
	}

### Initialize Paradox
	<script>
		$('.parallax').parallax();
	</script>

### Available Options
	<script>
		$('.parallax').parallax({
			speed: 		700, 	// (Number) Define parallax speed
			horizontal:	40, 	// (Number) Define parallax horizontal movement
			vertical:	40, 	// (Number) Define parallax vertical movement
			bounce:		true,	// (Boolean) Enable bouncing effect
			repeat:		false,	// (Boolean) Infinite animation
			fade:		false,	// (Boolean) Fading animation
			scroll:		false,	// (Boolean) Start parallax after scroll is triggered
			easing:		'swing'	// (String) Required jQuery Easing plug-in (http://gsgd.co.uk/sandbox/jquery/easing/)
		});
	</script>

### License 
Licensed under [Creative Commons Attribution 3.0 Unported (CC BY 3.0)](http://creativecommons.org/licenses/by/3.0/)

### Changelog
*	1.1
	Adding easing options
* 	1.0
	Initial release