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
	if ( $('.steps-i').length > 0 ) {
		$('.steps-i ul li').width($('.steps-i').width()/3);
		$('.steps-i .prev').hide();
		$('.steps-i .next').on('click', function() {
			$(this).siblings('ul').stop().animate({
				'margin-left': -$(this).siblings('ul').find('li').outerWidth()-2+'px'
			}, 500);
			$(this).stop().fadeOut(500);
			$(this).siblings('.prev').stop().fadeIn(500);
		});
		$('.steps-i .prev').on('click', function() {
			$(this).siblings('ul').stop().animate({
				'margin-left': 0
			}, 500);
			$(this).stop().fadeOut(500);
			$(this).siblings('.next').stop().fadeIn(500);
		});
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
		if ( $('.steps-i').length > 0 ) {
			$('.steps-i ul li').width($('.steps-i').width()/3);
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
		$('.section-drop').stop().slideUp(300);
		$('header .section h5').removeClass('opened');
	});
	$('.menu-opened .close').on('click', function(e) {
		e.preventDefault();
		$('.menu-opened').stop().slideUp(300);
	});
	$('header .section h5').on('click', function(e) {
		e.preventDefault();
		if ( !$(this).hasClass('opened') ) {
			$(this).addClass('opened');
		} else {
			$(this).removeClass('opened');
		}
		$('.section-drop').stop().slideToggle(300);
	});
	$('html').on('click', function() {
		$('.section-drop').stop().slideUp(300);
		$('header .section h5').removeClass('opened');
	});
	$('header .section h5, .section-drop').on('click', function(e) {
		e.stopPropagation();
	});
	function slider() {
		$('.slider .container').empty();
		$('.slider .prev, .slider .next, .slider .pagination').remove();
		$('.slider .container').html($('.slider .temp').html());
		$('.slider, .slider .container, .slider .container > div').width($('.wrapper').width());
		$('.slider').slides({
			generatePagination: true,
			generateNextPrev: true,
			container: 'container',
			effect: 'slide',
			slideSpeed: 500,
			play: 10000,
			pause: 2500,
		});
	}
	if ( $('.slider').length > 0 ) {
		slider();
		$('.slider').bind('swipeleft', function() {
			$('.slider .next').trigger('click');
		});
		$('.slider').bind('swiperight', function() {
			$('.slider .prev').trigger('click');
		});
	}
	$(window).resize(function() {
		if ( $('.slider').length > 0 ) {
			slider();
		}
	});
	if ( $('.prod-intro-2').length > 0 ) {
		$('header').addClass('custom');
	}
	$('.prod-process-2 .media h6').on('mouseenter', function() {
		$(this).siblings('div').stop().fadeIn(400);
		var video = $(this).parent().find('video');
		if ( video.length > 0 ) {
			video.get(0).play();
			var w = video.attr('width')/video.attr('height')*273;
			video.css({
				'width': w+'px',
				'height': '273px',
				'margin-left': -(w-273)/2+'px'
			});
		}
	});
	$('.prod-process-2 .media').on('mouseleave', function() {
		$(this).children('div').stop().fadeOut(400);
	});
	$('[data-open]').on('click', function(e) {
		e.preventDefault();
		var t = $('[data-target="'+$(this).attr('data-open')+'"]');
		$('.fade').stop(true,true).fadeIn(400);
		var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
		if ( h < 0 ) {
			h = 0;
		}
		t.css({
			'top': h+'px'
		}).stop(true,true).fadeIn(400);
	});
	$('.fade, .modal .close').on('click', function(e) {
		e.preventDefault();
		$('.fade, [data-target]').stop(true,true).fadeOut(400);
	});
	$(window).on('scroll', function() {
		$('.animated, .product-b .list li, .assortment-b .list > li .pic, .production-b .list li div, .about-p .group ul li img').each(function() {
			if ( $(window).scrollTop() > $(this).offset().top-$(window).height() && !$(this).hasClass('complete') ) {
				$(this).addClass('complete')
			}
		});
		if ( $('.shipment-e .car').length > 0 ) {
			if ( $(window).scrollTop() > $('.shipment-e .car').offset().top-$(window).height()+285 && !$('.shipment-e .car').hasClass('complete') ) {
				$('.shipment-e .car').animate({
					'left': $('.shipment-e .info').offset().left+505-$('.shipment-e .car').width()+'px'
				}, 5100);
				$('.shipment-e .car').addClass('complete');
			}
		}
	});
	$(window).trigger('scroll');
	$('.gallery-b .big div').on('mouseenter', function() {
		var t = $(this);
		t.stop().animate({
			'top': '-10px'
		}, 500, 'easeOutCubic', function() {
			t.stop().animate({
				'top': '0'
			}, 500, 'easeOutBounce');
		});
	});
	$('.text-b .gallery ul li').on('mouseenter', function() {
		var t = $('.text-b .gallery div');
		t.stop().fadeIn(500);
		t.find('img').attr('src',$(this).attr('data-full'));
	});
	$('.text-b .gallery ul li').on('mouseleave', function() {
		var t = $('.text-b .gallery div');
		t.stop().fadeOut(500);
	});
	var newsMain = $('.news-modal .main');
	var api;
	$('[data-open="news"]').on('click', function() {
		$('.news-modal .preview, .news-modal .main').height($('.news-modal').height());
		$('.news-modal .preview').jScrollPane();
		newsMain.jScrollPane();
		api = newsMain.data('jsp');
		$('.news-modal .preview li:nth-child('+$(this).attr('href')+')').trigger('click');
	});
	$('.news-modal .preview li').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$('.news-modal .main .core').empty();
		$('.news-modal .main .core').html($(this).find('.core').html());
		api.reinitialise();
	});
	$('.news-modal .main').delegate('.close', 'click', function() {
		$('.fade, [data-target]').stop(true,true).fadeOut(400);
	});
});