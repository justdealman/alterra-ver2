$(function() {
	function setImgCover() {
		$('.img-cover').each(function() {
			$(this).parent().css({
				'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
				'background-size': 'cover'
			});
		});
	}
	function setImgContain() {
		$('.img-contain').each(function() {
			$(this).parent().css({
				'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
				'background-size': 'contain'
			});
		});
	}
	setImgCover();
	setImgContain();
	function navSideTextPos() {
		$('.nav-side__item--text').each(function() {
			if ( $(this).outerHeight() == 15 ) {
				$(this).css({
					paddingTop: 8
				})
			}
		});
	}
	navSideTextPos();
	if ( $('.slider-main').length > 0 ) {
		$('.slider-main').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: true,
			dots: true,
			draggable: true,
			adaptiveHeight: true
		});
		$('.slider-main .slick-prev').css({
			left: $('.slider-main .slick-dots').position().left-28
		});
		$('.slider-main .slick-next').css({
			right: $('.slider-main .slick-dots').position().left-28
		});
	}
	$('input[type="checkbox"], input[type="radio"]').uniform();
	$('select.custom').selectric();
	$('.partners-i__slider').slick({
		slidesToShow: 9,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		draggable: true,
		responsive: [
			{
				breakpoint: 1430,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1247,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1
				}
			}
		]
	});
	$('.filter-side--title_clickable').on('click', function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('filter-side__item_hidden');
	});
	$('.filter-side__price-range').each(function() {
		var t = $(this);
		var sl = t.find('.slider');
		var min = eval(sl.attr('data-min'));
		var max = eval(sl.attr('data-max'));
		var step = eval(sl.attr('data-step'));
		var start = eval(sl.attr('data-start'));
		var end = eval(sl.attr('data-end'));
		sl.slider({
			value: 20000,
			range: true,
			min: min,
			max: max,
			step: step,
			values: [start, end],
			slide: function(event, ui) {
				t.find('.from').val(ui.values[0]);
				t.find('.to').val(ui.values[1]);
			}
		});
		t.find('.from').val(start).change(function() {
			var v = $(this).val();
			if ( v < min ) {
				v = min;
			} else if ( v > t.find('.to').val() ) {
				v = t.find('.to').val();
			}
			sl.slider('values',0,v);
			$(this).val(v);
		});
		t.find('.to').val(start).change(function() {
			var v = $(this).val();
			if ( v > max ) {
				v = max;
			} else if ( v < t.find('.from').val() ) {
				v = t.find('.from').val();
			}
			sl.slider('values',1,v);
			$(this).val(v);
		});
		t.find('.to').val(end);
	});
	$('.nav-side__title_clickable').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.nav-side').toggleClass('nav-side_minimized');
		navSideTextPos();
	});
	$('html').delegate('.quantity-e--button_minus', 'click', function(e) {
		e.preventDefault();
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
	});
	$('html').delegate('.quantity-e--button_plus', 'click', function(e) {
		e.preventDefault();
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
	});
	$('.lk__nav a').on('click', function(e) {
		e.preventDefault();
		$(this).parents('.lk').find('[data-tab="'+$(this).attr('href')+'"]').show().siblings('[data-tab]').hide();
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	$('.lk__nav li.active a').trigger('click');
	$('.may-need__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		draggable: true,
		vertical: true
	});
	if ( $('.about__slider').length > 0 ) {
		$('.about__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: true,
			dots: true,
			draggable: true,
			adaptiveHeight: true
		});
		$('.about__slider .slick-prev').css({
			left: $('.about__slider .slick-dots').position().left
		});
		$('.about__slider .slick-next').css({
			right: $('.about__slider .slick-dots').position().left
		});
	}
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	var isMobile = false;
	var justSwitched = false;
	function detectDevice() {
		var temp = isMobile;
		if ( Modernizr.mq('(max-width:1020px)') ) {
			isMobile = true;
		} else {
			isMobile = false;
		}
		if ( temp == isMobile ) {
			justSwitched = false;
		} else {
			justSwitched = true;
		}
	}
	function mobileNavCenterText() {
		$('.mobile-drop__catalog--text').each(function() {
			if ( $(this).outerHeight() > 12 ) {
				var p = 0;
			} else {
				var p = 6;
			}
			$(this).css({
				paddingTop: p
			})
		});
	}
	function clearCardSlider() {
		if ( $('.card__pictire .slick-track').length > 0 ) {
			$('.card__pictire').slick('unslick');
		}
	}
	function setCardSlider() {
		$('.card__pictire').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			dots: true,
			draggable: true
		});
	}
	function setCompareTable() {
		var t = $('.compare');
		var table = t.find('.compare__table');
		table.find('.compare__table--head').remove();
		if ( !isMobile ) {
			var totalWidth = table.find('thead td').size()*parseInt(table.attr('data-elem-desktop'))-10;
			$('.compare__title').remove()	
			$('.compare').append('<ul class="compare__title"></ul>');
			var title = $('.compare').find('.compare__title');
			title.css({
				top: table.find('thead').height()
			});
			table.find('tbody tr').each(function() {
				title.append('<li style="height:'+$(this).height()+'px">'+$(this).find('th').text()+'</li>');
			});
		} else {
			var totalWidth = table.find('thead td').size()*parseInt(table.attr('data-elem-mobile'));
			table.find('tbody tr th').each(function() {
				var s = $(this).parent();
				s.before('<tr class="compare__table--head">\
					<td colspan="'+s.children().size()+'"><strong>'+$(this).text()+'</strong></td>\
				</tr>');
			});
			$('.compare__inner').on('scroll', function() {
				$('.compare__table--head strong').css({
					marginLeft: $(this).scrollLeft()
				});
			});
		}
		$('.compare__table').width(totalWidth);
	}
	function desktopNavPadding() {
		if ( !isMobile ) {
			$(function() {
				var totalWidth = 0;
				$('.nav__item--link').each(function() {
					totalWidth = totalWidth + $(this).width();
				});
				var p = Math.ceil(($('.nav__row').outerWidth()-totalWidth)/($('.nav__item').size()*2));
				$('.nav__item a').css({
					paddingLeft: p,
					paddingRight: p,
					opacity: 1
				});
			});
		}
	}
	$(window).on('load resize', function() {
		detectDevice();
		desktopNavPadding();
		if ( justSwitched ) {
			if ( isMobile ) {
				$('.slider-main').detach().insertBefore('.content__col-1');
				mobileNavCenterText();
				if ( $('.content .breadcrumbs').length > 0 ) {
					$('.breadcrumbs').clone().insertAfter('header');
				}
				$('.filter-side__price-range .slider').detach().insertAfter('.filter-side__price-range .range');
				$('.filter-side').prepend('<h4 class="filter-side--toggle">Фильтр по параметрам</h4>');
				clearCardSlider();
				setCardSlider();
				$('.card__right--add-to-basket').detach().insertAfter('.card__right--buy_one-click');
				if ( $('.basket__table').length > 0 ) {
					$('.basket__table').prepend('<div class="basket__list"></div>');
					$('.basket__table tbody tr').each(function() {
						$('.basket__list').append('<div class="item-elem" data="'+$(this).index()+'"></div>');
						var t = $('.item-elem[data="'+$(this).index()+'"]');
						t.append('\
							<h4 class="item-elem--title">'+$(this).find('.basket__table--title').text()+'</h4>\
							<div class="item-elem--picture">\
								'+$(this).find('.basket__table--picture > div').html()+'\
							</div>\
							<p class="item-elem--code">'+$(this).find('.basket__table--code').text()+'</p>\
							<h5 class="item-elem--price"><span>'+$(this).find('.basket__table--price span').text()+' <em class="rouble-icon">г</em></span> / шт.</h5>\
							<p class="item-elem--total">'+$(this).find('.basket__table--total').text()+'</p>\
						');
						setImgContain();
						$(this).find('.quantity-e, .basket__table--remove_button').clone().appendTo(t);
					});
				}
				if ( $('.basket__total').length > 0 ) {
					$('.basket__total').prepend('<div class="basket__total--short"><span>'+$('.basket__total--quantity span em').text()+'</span> товаров на сумму: <span>'+$('.basket__total--price strong em').text()+'</span> руб.</div>');
				}
				$('.rouble-icon').each(function() {
					$(this).text('о');
				});
				if ( $('.lk__orders').length > 0 ) {
					$('.lk__orders').each(function() {
						$(this).append('<ul class="lk__orders--list"></ul>');
						var t = $(this).find('.lk__orders--list');
						$(this).find('tbody tr').each(function() {
							t.append('\
								<li data="'+$(this).index()+'">\
									<a href="'+$(this).find('.lk__orders--more a').attr('href')+'" class="lk__orders--link"></a>\
								</li>\
							');
							s = t.find('li[data="'+$(this).index()+'"] .lk__orders--link');
							s.append('\
								<h6>Заказ №'+$(this).find('.lk__orders--number').text()+' от '+$(this).find('.lk__orders--date').text()+'</h6>\
								<p><strong>Статус заказа:</strong> '+$(this).find('.lk__orders--status').text()+'</p>\
								<p><strong>Оплата:</strong> '+$(this).find('.lk__orders--payment').text()+'</p>\
								<p><strong>Доставка:</strong> '+$(this).find('.lk__orders--method').text()+'</p>\
								<p><strong>Сумма заказа:</strong> '+$(this).find('.lk__orders--price').text()+'</p>\
							');
						});
					});
				}
				if ( $('.lk__user--bonus').length > 0 ) {
					$('.lk__user--bonus').each(function() {
						$(this).find('table').after('<ul class="lk__user--bonus-list"></ul>');
						var t = $(this).find('.lk__user--bonus-list');
						$(this).find('tbody tr').each(function() {
							t.append('<li data="'+$(this).index()+'"></li>');
							s = t.find('li[data="'+$(this).index()+'"]');
							s.append('\
								<p><strong>Вид бонуса:</strong> '+$(this).find('.lk__user--bonus_title').text()+'</p>\
								<p><strong>Количество бонусов:</strong> '+$(this).find('.lk__user--bonus_quantity').text()+'</p>\
							');
						});
					});
				}
				if ( $('.contacts').length > 0 ) {
					$('.contacts .tabs-nav a').on('click', function(e) {
						e.preventDefault();
						$('.contacts__tab[data-tab="'+$(this).attr('href')+'"]').addClass('contacts__tab_is-active').siblings().removeClass('contacts__tab_is-active');
						$(this).parent().addClass('active').siblings().removeClass('active');
					});
					$('.contacts .tabs-nav .active a').trigger('click');
					$('.contacts__item--title_is-dropped').removeClass('contacts__item--title_is-dropped');
				}
				if ( $('.catalog__view').length ) {
					$('.catalog__view--item').each(function() {
						$(this).children().wrapAll('<a href="'+$(this).find('.catalog__view--title a').attr('href')+'" class="catalog__view--link"></a>');
					});
				}
				if ( $('.catalog__table').length ) {
					$('.catalog__table').after('<div class="catalog__table-list"></div>');
					$('.catalog__table tbody tr').each(function() {
						$('.catalog__table-list').append('<div class="catalog__table-list--item" data="'+$(this).index()+'"><a href="'+$(this).find('.catalog__table--title a').attr('href')+'" class="catalog__table-list--link"></a></div>');
						var t = $('.catalog__table-list--item[data="'+$(this).index()+'"] .catalog__table-list--link');
						t.append('\
							<h4 class="catalog__table-list--title">'+$(this).find('.catalog__table--title').text()+'</h4>\
							<p class="catalog__table-list--code">код товара: '+$(this).find('.catalog__table--code').text()+'</p>\
							<h5 class="catalog__table-list--price"><span>'+$(this).find('.catalog__table--price').html()+'</span> / шт.</h5>\
							<div class="catalog__table-list--picture">\
								<img src="'+$(this).find('.catalog__table--pic img').attr('src')+'" class="img-contain" alt="">\
							</div>\
						');
					});
					setImgContain();
				}
			} else {
				$('.slider-main').detach().insertBefore('.content__col-2 .catalog');
				if ( $('.content .breadcrumbs').length > 0 ) {
					$('header').next('.breadcrumbs').remove();
				}
				$('.filter-side__price-range .slider').detach().insertBefore('.filter-side__price-range .range');
				$('.filter-side--toggle, .basket__list, .basket__total--short, .lk__orders--list, .lk__user--bonus-list, .catalog__table-list').remove();
				$('.rouble-icon').each(function() {
					$(this).text('г');
				});
				clearCardSlider();	
				$('.mobile-drop').hide();
				$('.wrapper, .footer-m').show();
				$('.card__right--add-to-basket').detach().insertBefore('.card__right--buy_one-click');
				navSideTextPos();
				if ( $('.catalog__view').length ) {
					$('.catalog__view--link').children().unwrap();
				}
			}
		}
		setCompareTable();
	});
	$(window).trigger('resize');
	$('.mobile-drop__nav_has-sub > a').on('click', function(e) {
		e.preventDefault();
		var t = $(this).parent();
		if ( !t.hasClass('mobile-drop__nav_is-opened') ) {
			t.children('ul').stop().slideDown(200);
		} else {
			t.children('ul').stop().slideUp(200);
		}
		t.toggleClass('mobile-drop__nav_is-opened');
	});
	$('.mobile-drop__catalog_has-sub > a').on('click', function(e) {
		e.preventDefault();
		var t = $(this).parent();
		if ( !t.hasClass('mobile-drop__catalog_is-opened') ) {
			t.children('ul').stop().slideDown(200);
		} else {
			t.children('ul').stop().slideUp(200);
		}
		t.toggleClass('mobile-drop__catalog_is-opened');
	});
	$('.mobile-drop__subnav_has-sub > a').on('click', function(e) {
		e.preventDefault();
		var t = $(this).parent();
		if ( !t.hasClass('mobile-drop__subnav_is-opened') ) {
			t.children('ul').stop().slideDown(200);
		} else {
			t.children('ul').stop().slideUp(200);
		}
		t.toggleClass('mobile-drop__subnav_is-opened');
	});
	function showMobileMenu() {
		$('body').addClass('is-locked');
		$('.mobile-drop').addClass('is-visible');
		$('.fade-bg').stop().fadeIn(300);
	}
	function hideMobileMenu() {
		$('body').removeClass('is-locked');
		$('.mobile-drop').removeClass('is-visible');
		$('.fade-bg').stop().fadeOut(300);
	}
	$('.mobile-menu').on('click', function(e) {
		e.preventDefault();
		showMobileMenu();
	});
	$('.mobile-drop--close').on('click', function(e) {
		e.preventDefault();
		hideMobileMenu();
	});
	$('.mobile-drop').after('<span class="mobile-drop--swipe"></span>');
	$(document).on('swiperight', '.mobile-drop--swipe, .fade-bg', function() {
		showMobileMenu();
	});
	$('.mobile-drop').on('swipeleft', function() {
		hideMobileMenu();
	});
	$('.nav-side__item').on('mouseenter', function(e) {
		e.preventDefault();
		if ( !isMobile ) {
			$(this).find('.nav-side__sub').stop().fadeIn(300).css({
				'min-height': $(this).parents('.nav-side__list').outerHeight()
			});
		}
	});
	$('.nav-side__item').on('mouseleave', function(e) {
		e.preventDefault();
		if ( !isMobile ) {
			$(this).find('.nav-side__sub').stop().fadeOut(300);
		}
	});
	$('.header__shop--address span').on('click', function(e) {
		e.preventDefault();
		$('.fade-bg, .citysel-drop').stop().fadeIn(300);
	});
	$('.fade-bg, .citysel-drop--close').on('click', function(e) {
		e.preventDefault();
		$('.fade-bg, .citysel-drop, .modal').removeClass('fixed').stop().fadeOut(300);
		hideMobileMenu();
	});
	$('.citysel-drop li span').on('click', function(e) {
		e.preventDefault();
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('.fade-bg, .citysel-drop').stop().fadeOut(300);
		$('.citysel-m').removeClass('fixed');
	});
	$('.panel-m').on('click', function(e) {
		e.preventDefault();
		$('.citysel-m').stop().slideToggle(300);
	});
	$('.citysel-m li').on('click', function(e) {
		e.preventDefault();
		$(this).parent().removeClass('fixed').stop().slideUp(300);
		$(this).addClass('active').siblings().removeClass('active');
		$('.fade-bg').hide();
	});
	$('.filter-side').delegate('.filter-side--toggle', 'click', function(e) {
		e.preventDefault();
		$('.filter-side').toggleClass('filter-side_mobile-drop');
	});
	$('.catalog__filter--sort-m li').on('click', function(e) {
		e.preventDefault();
		$(this).addClass('catalog__filter--sort-m_active').siblings().removeClass();
	});
	$('.catalog__title').on('click', function(e) {
		e.preventDefault();
		if ( isMobile ) {
			$(this).toggleClass('catalog__title_is-hidden');
		}
	});
	$('.card__more-m--title').on('click', function(e) {
		e.preventDefault();
		if ( isMobile ) {
			$(this).toggleClass('card__more-m--title_is-hidden');
		}
	});
	$('.ordering--autorization a').on('click', function(e) {
		e.preventDefault();
		$('.ordering__login').toggleClass('ordering__login_is-dropped');
	});
	$('.vacancy__item--title').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('vacancy__item--title_is-dropped');
	});
	$('.contacts__item--title').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('contacts__item--title_is-dropped');
	});
	$('.vacancy__form--file-link').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('input[type="file"]').trigger('click');
	});
	$('.ordering--autorization').on('click', function(e) {
		e.preventDefault();
		$('.ordering--autorization').toggleClass('ordering--autorization_is-dropped');
	});
	$('input[data="switch"]').change(function() {
		$('[data-'+$(this).attr('name')+']').hide().filter('[data-'+$(this).attr('name')+'="'+$(this).val()+'"]').show();
	});
	$('input[data="switch"]').each(function() {
		if ( $(this).prop('checked') == true ) {
			$('[data-'+$(this).attr('name')+']').hide().filter('[data-'+$(this).attr('name')+'="'+$(this).val()+'"]').show();
		}
	});
	$('.nav-side__item--link').on('click', function(e) {
		if ( isMobile ) {
			e.preventDefault();
			$(this).toggleClass('nav-side__item--link_is-dropped');
		}
	});
	$('.nav-side__sub--item h5 a').on('click', function(e) {
		if ( isMobile ) {
			e.preventDefault();
			$(this).parent().toggleClass('is-dropped');
		}
	});
	$('input[name="add-to-compare"]').on('change', function() {
		var t = $(this).parents('.checker');
		t.siblings('p').hide();
		if ( $(this).prop('checked') == true ) {
			t.siblings('.link').show();
		} else {
			t.siblings('.title').show();
		}
	});
	function setSlider(e) {
		e.each(function() {
			var t = $(this);
			if ( t.find('.slick-list').length ) {
				t.slick('unslick');
			}
			if ( !isMobile ) {
				t.slick({
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
					arrows: true,
					dots: false,
					draggable: true,
					  responsive: [
						{
							breakpoint: 1430,
							settings: {
								slidesToShow: 5
							}
						}, {
							breakpoint: 1247,
							settings: {
								slidesToShow: 4
							}
						},
					]
				});
			}
		});
	}
	setSlider($('.catalog__slider'));
	$('.photo-zoom').fancybox();
	$('.rating-e--hoverable').each(function() {
		for ( var i=1; i<=5; i++ ) {
			$(this).append('<i></i>');
		}
	});
	function setRating(e) {
		e.each(function() {
			var h = $(this).height();
			console.log(h);
			$(this).css({
				'background-position-y': -h*$(this).attr('data')
			});
		});
	}
	setRating($('.rating-e[data]'));
	$('.rating-e i').on('mouseover', function() {
		var h = $(this).parent().height();
		var t = $(this).index();
		$(this).parent().css({
			'background-position-y': -h*$(this).index()-h
		});
	});
	$('.rating-e i').on('click', function(e) {
		e.preventDefault();
		var h = $(this).parent().attr('data',$(this).index()+1);
	});
	$('.rating-e').on('mouseleave', function() {
		setRating($(this));
	});
	$('[data-order-shop-mobile]').on('click', function(e) {
		e.preventDefault();
		$('.citysel-m').addClass('fixed');
		$('.fade-bg').show();
	});
	if ( $('.about__nav').is(':visible') ) {
		$('.about__nav a').on('click', function(e) {
			e.preventDefault();
			var t = $(this).parent();
			$('html, body').stop().animate({
				scrollTop: $('[data-scroll="'+$(this).attr('href')+'"]').position().top
			}, 500);
			setTimeout(function() {
				t.addClass('active').siblings().removeClass('active');
			}, 500);
		});
		$(window).on('scroll', function() {
			if ( $(document).scrollTop() > $('.about__main').position().top ) {
				$('.about__nav').css({
					marginTop: $(document).scrollTop()-$('.about__main').position().top
				});
			} else {
				$('.about__nav').css({
					marginTop: 0
				});
			}
			$('[data-scroll').each(function() {
				if ( $(this).position().top <= $(document).scrollTop() ) {
					$('.about__nav a[href="'+$(this).attr('data-scroll')+'"]').parent().addClass('active').siblings().removeClass('active');
				}
			});
		});
	}
	$('.catalog__table--pic div').on('mouseover', function() {
		$('.table--pic__zoom').remove();
		$('body').append('<div class="table--pic__zoom" style="left:'+$(this).offset().left+'px;top:'+$(this).offset().top+'px"><div><div><img src="'+$(this).find('img').attr('src')+'" class="img-contain" alt=""></div></div></div>');
		setImgContain();
	});
	$('.catalog__table--pic div').on('mouseout', function() {
		$('.table--pic__zoom').remove();
	});
	$('[data-open]').on('click', function(e) {
		e.preventDefault();
		var t = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
		$('.fade-bg').stop(true,true).fadeIn(300);
		var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
		t.css({
			'top': h+'px'
		}).stop(true,true).fadeIn(300).siblings('[data-target]').stop(true,true).fadeOut(300);
	});
	$('.modal--close').on('click', function(e) {
		e.preventDefault();
		$('.fade-bg, .modal').stop(true,true).fadeOut(300);
	});
	$('.header__search--input').on('keyup focus', function() {
		if ( $(this).val() !== '' ) {
			$('.header__search').addClass('header__search_is-find');
			$('.header__search-result').show();
		} else {
			$('.header__search').removeClass('header__search_is-find');
			$('.header__search-result').hide();
		}
	});
	$(document).on('click', function() {
		$('.header__search').removeClass('header__search_is-find');
		$('.header__search-result').hide();
	});
	$('.header__search, .header__search-result').on('click', function(e) {
		e.stopPropagation();
	});
});