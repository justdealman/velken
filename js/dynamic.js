$.fn.background = function() {
	this.parent().css({
		'background': 'url("'+this.attr('src')+'") no-repeat center center',
		'background-size': 'cover'
	});
}
$(function() {
	function zoomIndex() {
		var r;
		if ( $('.wrapper').height() < 895 ) {
			r = $('.wrapper').height()/895;
		} else {
			r = 1;
		}
		$('.core').css({
			'transform': 'scale('+r+') rotate(-45deg)',
			'-webkit-transform': 'scale('+r+') rotate(-45deg)',
		});
		$('h1, .logos').css({
			'transform': 'scale('+r+')',
			'-webkit-transform': 'scale('+r+')',
		});
	}
	function indexText() {
		$('.index .core ul li > a > div > div').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2+'px'
			});
		});
	}
	function videoBg() {
		var ratio = 16/9;
		var w = $('.wrapper').width();
		var h = $('.wrapper').height();
		if (  w/h > ratio ) {
			$('.video video').css({
				'left': '0',
				'top': -(w/16*9-h)*0.5+'px',
				'transform': 'scale('+w/960+')',
				'-webkit-transform': 'scale('+w/960+')'
			});
		}
		else {
			$('.video video').css({
				'left': -(h/16*9-w)*0.5+'px',
				'top': '0',
				'transform': 'scale('+h/536+')',
				'-webkit-transform': 'scale('+h/536+')'
			});
		}
	}
	if ( $('.index').length > 0 ) {
		zoomIndex();
		indexText();
	}
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('body.index').addClass('mobile');
	}
	else {
		$('body.index').addClass('desktop');
		videoBg();
	}
	$('.product-b .nav li').hover(
		function() {
			$(this).find('div').stop().slideDown(300);
			$(this).find('p').css({
				'margin-top': -$(this).find('p').outerHeight()/2+'px'
			});
		},
		function() {
			$(this).find('div').stop().slideUp(300);
		}
	);
	function productDiv() {
		$('.product-b > div').width($('.wrapper').width()-$('.product-b > div').offset().left);
	}
	if ( $('.product-b').length > 0 ) {
		productDiv();
	}
	function aboutBenefitsPic() {
		$('.about-p .benefits .pic').width($('.wrapper').width()-$('.about-p .benefits .pic').offset().left);
		$('.about-p .benefits .pic').height($('.about-p .benefits .pic').siblings('ol').outerHeight()-$(this).siblings('ol').outerHeight()-57);
	}
	function productIntro() {
		$('.product-b .bg').height($('.product-b .rc .desc').position().top+$('.product-b .rc .desc').outerHeight()+47);
	}
	if ( $('.product-b .rc').length > 0 ) {
		productIntro();
	}
	$(window).resize(function() {
		if ( $('.index').length > 0 ) {
			zoomIndex();
			if ( $('.video').is(':visible') ) {
				videoBg();
			}
		}
		if ( $('.product-b').length > 0 ) {
			productDiv();
		}
		if ( $('.about-p .benefits').length > 0 ) {
			aboutBenefitsPic();
		}
		if ( $('.product-b .rc').length > 0 ) {
			productIntro();
		}
	});
	$(window).load(function() {
		if ( $('.index').length > 0 ) {
			indexText();
		}
		if ( $('.about-p .benefits').length > 0 ) {
			aboutBenefitsPic();
		}
	});
	$('.img-bg').each(function() {
		$(this).background();
	});
	$('.steps-i li h3').on('click', function(e) {
		e.preventDefault();
		var t = $(this).parents('li');
		if ( t.hasClass('active') ) {
			t.removeClass('active');
			t.find('h6').stop().fadeIn(200);
			$(this).siblings('div').stop().slideUp(200);
		} else {
			t.addClass('active');
			t.find('h6').stop().fadeOut(200);
			$(this).siblings('div').stop().slideDown(200);
		}
	});
	$('[data-big]').hide();
	$('[data-preview]').on('click', function() {
		var t = $('[data-big="'+$(this).attr('data-preview')+'"]');
		t.siblings().stop().fadeOut(200);
		t.stop().delay(100).fadeIn(200);
		$(this).parent().addClass('active').siblings().removeClass('active');
	}).filter(':first').click();
	$('.about-p .group ul li').each(function() {
		$(this).width($(this).find('img').attr('width'));
	});
	$('.menu-open').on('click', function(e) {
		e.preventDefault();
		if ( $('.menu-opened').is(':hidden') ) {
			$('.menu-opened').stop().slideDown(300);
		} else {
			$('.menu-opened').stop().slideUp(300);
		}
	});
	$('.menu-opened .close').on('click', function(e) {
		e.preventDefault();
		$('.menu-opened').stop().slideUp(300);
	});
});