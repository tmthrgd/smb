'use strict';

jQuery.noConflict()(function($) {
	var mariojump = function() {
		$(this).off('mouseenter', mariojump).stop().animate({ 'margin-top': '-320px' }, 550, 'easeOutCubic', function() {
			$(this).stop().animate({ 'margin-top': '-60px' }, 500, 'easeInOutCubic', function() {
				$(this).css('background-image', 'url(imgs/mario.png)').mouseenter(mariojump);
			});
		}).css('background-image', 'url(imgs/mario-jump.png)');
	};
	
	$('.page-footer .mario').mouseenter(mariojump).css('cursor', 'cell');
	
	var pipeflowers = $('.pipe-top .flower');
	var pipeflowersopen = true;
	
	setInterval(function() {
		pipeflowers.css('background-image', 'url(imgs/flower-' + (pipeflowersopen ? 'closed' : 'open') + '.png)');
		pipeflowersopen = !pipeflowersopen;
	}, 200);
	
	var goombas = $('.goomba');
	var goombasleft = true;
	
	setInterval(function() {
		goombas.css('background-image', 'url(imgs/goomba-' + (goombasleft ? 'right' : 'left') + '.png)');
		goombasleft = !goombasleft;
	}, 200);
});