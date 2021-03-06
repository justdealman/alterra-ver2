﻿function setImgCover() {
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
function setRatio() {
	$('[data-ratio]').each(function() {
		var t = $(this).find('.scale');
		var r = $(this).attr('data-ratio');
		t.outerHeight(t.outerWidth()*r);
	});
}
$(function() {
	setImgCover();
	setImgContain();
	setRatio();
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
		}).fadeIn(200);
		if ( $('.slider-main .slick-dots').length ) {
			$('.slider-main .slick-prev').css({
				left: $('.slider-main .slick-dots').position().left-28
			});
			$('.slider-main .slick-next').css({
				right: $('.slider-main .slick-dots').position().left-28
			});
		}
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
	$('.lk__nav .lk__nav--link').off('click');
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
	}/*
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});*/
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
		$('.compare').each(function() {
			var table = $(this).find('.compare__table');
			table.find('.compare__table--head').remove();
			if ( !isMobile ) {
				var totalWidth = table.find('thead td').size()*parseInt(table.attr('data-elem-desktop'))-10;
			} else {
				var totalWidth = table.find('thead td').size()*parseInt(table.attr('data-elem-mobile'));
			}
			table.width(totalWidth);
			if ( !isMobile ) {
				$(this).find('.compare__title').remove()	
				$(this).append('<ul class="compare__title"></ul>');
				var title = $(this).find('.compare__title');
				title.css({
					top: table.find('thead').height()
				});
				table.find('tbody tr').each(function() {
					title.append('<li>'+$(this).find('th').text()+'</li>');
					var maxHeight;
					var li = title.find('li').eq($(this).index());
					if ( $(this).height() > li.outerHeight() ) {
						maxHeight = $(this).height();
					} else {
						maxHeight = li.outerHeight();
					}
					li.outerHeight('auto').outerHeight(maxHeight);
					$(this).height('auto').height(maxHeight);
				});
			} else {
				table.find('tbody tr th').each(function() {
					$(this).parent().height('auto');
					var s = $(this).parent();
					s.before('<tr class="compare__table--head">\
						<td colspan="'+s.children().size()+'"><strong>'+$(this).text()+'</strong></td>\
					</tr>');
				});
				$(this).find('.compare__inner').on('scroll', function() {
					$(this).find('.compare__table--head strong').css({
						marginLeft: $(this).scrollLeft()
					});
				});
			}
			var scrollTopElem = table.parents('.compare').prev('.compare__scroll-top');
			if ( table.width() > table.parent('.compare__inner').width() ) {
				scrollTopElem.show().find('div').width(totalWidth);
			} else {
				scrollTopElem.hide();
			}
		});
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
	function discountScale() {
		if ( $('.content').width() < 1360 ) {
			var r = $('.content').width()/1360;
		} else {
			var r = 1;
		}
		$('.discount').css({
			'margin-bottom': -$('.discount').outerHeight()*(1-r)+'px',
			'-webkit-transform': 'scale('+r+')',
			'-moz-transform': 'scale('+r+')',
			'transform': 'scale('+r+')',
		});
	}
	if ( $('.discount').length ) {
		discountScale();
	}
	function gridScale() {
		$('.gallery__item--pic, .news__item--pic').each(function() {
			$(this).height($(this).width()*0.62);
		});
	}
	if ( $('.gallery__list').length || $('.news__list').length ) {
		gridScale();
	}
	function setCardHeight() {
		$('.card__row').css({
			'min-height': $('.card__right').outerHeight()
		});
	}
	function addToBasketButton(e) {
		if ( isMobile && e.attr('data-complete') == 'true' ) {
			e.html(e.attr('data-complete-text'));
			e.addClass('complete-mobile');
		} else {
			e.html(e.attr('data-default-text'));
			e.removeClass('complete-mobile');
		}
	}
	function setItemTall() {
		$('.item-elem--price i.old, .catalog__view--price i.old, .catalog__table-list--price').each(function() {
			$(this).parents('.item-elem, .catalog__view--item, .catalog__table-list--item').addClass('tall');
		});
		$('.card__right--price').each(function() {
			if ( isMobile ) {
				$(this).siblings('.quantity-e').css({
					'min-height': $(this).height()
				});
			} else {
				$(this).siblings('.quantity-e').css({
					'min-height': 0
				});
			}
		});
	}
	setItemTall();
	function setRatio() {
		$('[data-ratio]').each(function() {
			var t = $(this).find('.scale');
			t.outerHeight(t.outerWidth()*$(this).attr('data-ratio'));
		});
	}
	setRatio();
	function setCompareHeight() {
		$('.compare__table').each(function() {
			var items = $(this).find('.item-elem');
			if ( isMobile ) {
				var max = 0;
				items.each(function() {
					var h = $(this).outerHeight(); 
					max = h > max ? h : max;
				});
				items.outerHeight(max);
			} else {
				items.outerHeight('auto');
			}
		});
	}
	$(window).on('load resize', function() {
		$('.special-price-tip, .tip-bg').remove();
		detectDevice();
		desktopNavPadding();
		hideSearchResult();
		setRatio();
		if ( $('.discount').length ) {
			discountScale();
		}
		if ( $('.gallery__list').length || $('.news__list').length ) {
			gridScale();
		}
		if ( $('.card').length ) {
			setCardHeight();
			addToBasketButton($('.card__right--add-to-basket'));
		}
		if ( justSwitched ) {
			setItemTall();
			if ( isMobile ) {
				$('.slider-main').detach().insertBefore('.content__col-1');
				mobileNavCenterText();
				if ( $('.content .breadcrumbs').length > 0 ) {
					$('.breadcrumbs').clone().insertAfter('header');
				}
				$('.filter-side__price-range .slider').each(function() {
					var t = $(this);
					var p = $(this).parent();
					t.detach().insertAfter(p.find('.range'));
				});
				$('.filter-side').prepend('<h4 class="filter-side--toggle">Фильтр по параметрам</h4>');
				clearCardSlider();
				setCardSlider();
				$('.card__right--add-to-basket').detach().insertAfter('.card__right--buy_one-click');
				if ( $('.basket__table').length > 0 ) {
					$('.basket__table').each(function() {
						var e = $(this);
						e.prepend('<div class="basket__list"></div>');
						e.find('tbody tr').each(function() {
							e.find('.basket__list').append('<div class="item-elem" data="'+$(this).index()+'" data-id="'+$(this).attr('data-id')+'"></div>');
							var t = e.find('.item-elem[data="'+$(this).index()+'"]');
							t.append('\
								<h4 class="item-elem--title">'+$(this).find('.basket__table--title').html()+'</h4>\
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
					});
				}
				if ( $('.basket__total').length > 0 ) {
					$('.basket__total').prepend('<div class="basket__total--short"><span>'+$('.basket__total--quantity span em[data-quantity]').text()+'</span> товаров (<span>~'+$('.basket__total--quantity span em[data-weight]').text()+'</span> кг) на сумму: <span>'+$('.basket__total--price strong em[data-price]').text()+'</span> руб.</div>');
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
								<li data="'+$(this).index()+'" data-id="'+$(this).attr('data-id')+'">\
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
						$('.catalog__table-list').append('<div class="catalog__table-list--item" data="'+$(this).index()+'" data-id="'+$(this).attr('data-id')+'"><a href="'+$(this).find('.catalog__table--title a').attr('href')+'" class="catalog__table-list--link"></a></div>');
						var t = $('.catalog__table-list--item[data="'+$(this).index()+'"] .catalog__table-list--link');
						t.append('\
							<h4 class="catalog__table-list--title">'+$(this).find('.catalog__table--title').text()+'</h4>\
							<p class="catalog__table-list--code">код товара: '+$(this).find('.catalog__table--code').text()+'</p>\
							<h5 class="catalog__table-list--price">'+$(this).find('.catalog__table--price-current').html()+'</h5>\
							<div class="catalog__table-list--picture">\
								<img src="'+$(this).find('.catalog__table--pic img').attr('src')+'" class="img-contain" alt="">\
							</div>\
						');
					});
					setImgContain();
				}
				$('.nav-side__list div, .nav-side__list ul').each(function() {
					$(this).siblings().addClass('has-sub');
				});
				$('.mobile-drop__catalog ul').each(function() {
					$(this).siblings().parent().addClass('has-sub');
				});
				setItemTall();
				if ( $('.basket-table').length ) {
					$('.basket-table__td').each(function() {
						$(this).find('.basket-table--code').detach().insertAfter($(this).find('.basket-table--title'));
					});
				}
				if ( $('.special').length > 0 ) {
					$('.breadcrumbs').detach().insertAfter($('.header'));
					$('<h4 class="filter-side--toggle">Фильтр по параметрам</h4>').insertBefore($('.filter'));
				}
			} else {
				$('.slider-main').detach().insertBefore('.content__col-2 .catalog');
				if ( $('.content .breadcrumbs').length > 0 ) {
					$('header').next('.breadcrumbs').remove();
				}
				$('.filter-side__price-range .slider').each(function() {
					var t = $(this);
					var p = $(this).parent();
					t.detach().insertBefore(p.find('.range'));
				});
				$('.filter-side--toggle, .basket__list, .basket__total--short, .lk__orders--list, .lk__user--bonus-list, .catalog__table-list').remove();
				$('.rouble-icon').each(function() {
					$(this).text('г');
				});
				clearCardSlider();	
				$('.wrapper, .footer-m').show();
				hideMobileMenu();
				$('.card__right--add-to-basket').detach().insertBefore('.card__right--buy_one-click');
				navSideTextPos();
				if ( $('.catalog__view').length ) {
					$('.catalog__view--link').children().unwrap();
				}
				if ( $('.basket-table').length ) {
					$('.basket-table__td').each(function() {
						$(this).find('.basket-table--code').detach().insertBefore($(this).find('.basket-table--title'));
					});
				}
				if ( $('.special').length > 0 ) {
					$('.breadcrumbs').detach().prependTo($('.container__rc'));
				}
			}
		}
		if ( $('.compare__table').length ) {
			setCompareHeight();
		}
		setCompareTable();
		closeBonusesModal();
		setRatio();
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
	$('.mobile-drop__nav').on('click', '.mobile-drop__catalog_has-sub.has-sub > a', function(e) {
		e.preventDefault();
		var t = $(this).parent();
		if ( !t.hasClass('mobile-drop__catalog_is-opened') ) {
			t.children('ul').stop().slideDown(200);
		} else {
			t.children('ul').stop().slideUp(200);
		}
		t.toggleClass('mobile-drop__catalog_is-opened');
	});
	$('.mobile-drop__nav').on('click', '.mobile-drop__subnav_has-sub.has-sub > a', function(e) {
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
		if ( $('.fade-bg').hasClass('is-visible') ) {
			$('.fade-bg').removeClass('is-visible');	
		}
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
		if ( isMobile ) {
			e.preventDefault();
			document.location.href = $(this).attr('data-href');
			//$(this).toggleClass('catalog__title_is-hidden');
		}
	});
	$('.card__more-m--title').on('click', function(e) {
		e.preventDefault();
		if ( isMobile ) {
			$(this).toggleClass('card__more-m--title_is-hidden');
		}
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
	$('input[type="file"]').on('change', function(e) {
		var filename = $(this).val().split('\\').pop();
		$(this).siblings('input[type="text"]').val(filename);
	});
	$('input[data="switch"]').change(function() {
		$('[data-'+$(this).attr('name')+']').hide().filter('[data-'+$(this).attr('name')+'="'+$(this).val()+'"]').show();
	});
	$('input[data="switch"]').each(function() {
		if ( $(this).prop('checked') == true ) {
			$('[data-'+$(this).attr('name')+']').hide().filter('[data-'+$(this).attr('name')+'="'+$(this).val()+'"]').show();
		}
	});
	$('.nav-side').on('click', '.nav-side__item--link.has-sub', function(e) {
		if ( isMobile ) {
			e.preventDefault();
			$(this).toggleClass('nav-side__item--link_is-dropped');
		}
	});
	$('.nav-side').on('click', '.nav-side__sub--item h5.has-sub a', function(e) {
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
					slidesToShow: 5,
					slidesToScroll: 1,
					infinite: true,
					arrows: true,
					dots: false,
					draggable: true,
					  responsive: [
						{
							breakpoint: 1430,
							settings: {
								slidesToShow: 4
							}
						}, {
							breakpoint: 1247,
							settings: {
								slidesToShow: 3
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
		if ( !$(this).is('[data-complete]') || $(this).attr('data-complete') == 'false' ) {
			e.preventDefault();
			var t = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
			$('.fade-bg').stop(true,true).fadeIn(300);
			var h = $(window).scrollTop()+($(window).height()-t.outerHeight())/2;
			t.css({
				'top': h+'px'
			}).stop(true,true).fadeIn(300).siblings('[data-target]').stop(true,true).fadeOut(300);
		}
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
	$('.card__description--nav a').on('click', function(e) {
		e.preventDefault();
		var tabs = $(this).parents('.card__description--nav').siblings('.card__description--tab');
		var target = tabs.filter('[data="'+$(this).attr('href')+'"]');
		if ( target.is(':hidden') ) {
			tabs.hide();
			target.show();
			target.css({
				'min-height': target.find('[data-min-height]').outerHeight()
			})
			$(this).parent().addClass('active').siblings().removeClass('active');
		}
	}).filter(':first').click();
	$('.header__call--order').on('click', function(e) {
		e.preventDefault();
		if ( isMobile ) {
			window.location = 'tel:'+$('.citysel-m li.active').attr('data-tel');
		} else {
			e.stopPropagation();
		}
	});
	$('.footer-m__nav .full-version a').on('click', function(e) {
		e.preventDefault();
		$('meta[name="viewport"]').attr('content','width=1030, user-scalable=yes');
	});
	$('.card__right--add-to-basket').on('click', function(e) {
		if ( isMobile && $(this).attr('data-complete') == 'true' ) {
			location.href = $(this).attr('data-complete-link');
		}
		if ( isMobile ) {
			$(this).attr('data-complete','true');
			addToBasketButton($(this));
		}
	});
	$('.compare__scroll-top').on('scroll', function() {
		var t = $(this).next('.compare').find('.compare__inner')
		t.scrollLeft($(this).scrollLeft());
	});
	$('.compare__inner').on('scroll', function() {
		var t = $(this).parents('.compare').prev('.compare__scroll-top');
		if ( t.is(':visible') ) {
			t.scrollLeft($(this).scrollLeft());
		}
	});
	$('.delivery__item--title').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});
	$('.delivery__content--subtitle').on('click', function(e) {
		e.preventDefault();
		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active').parent().addClass('is-show');
		} else {
			$(this).removeClass('active').parent().removeClass('is-show');
		}
	});
	$('button.filter-side--button_clear').on('click', function() {
		$(this).siblings('input.filter-side--button_clear').trigger('click');
	});
	$('.categories__nav .arrow').on('click', function() {
		$(this).parent().toggleClass('is-dropped');
	});
	$('.search-results__lc li').on('mouseover', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.search-results').find('.search-results__rc ul[data="'+$(this).attr('data')+'"]').show().siblings('[data]').hide();
	});
	function hideSearchResult() {
		$('.fade-bg, .search-results').hide();
		$('.header__search').removeClass('search-result');
	}
	$('.header__search--input').on('click focus keyup', function() {
		if ( !isMobile && $(this).val() !== '' ) {
			$('.header__search').addClass('has-results');
			var w = $('.header__row').outerWidth()-$('.header__search').position().left;
			$('.search-results').css({
				'left': $(this).offset().left,
				'top': $(this).offset().top,
				'width': w
			}).stop().fadeIn(300);
			$('.search-results__rc').css({
				'width': $('.search-results').innerWidth()-$('.search-results__lc').outerWidth()
			});
			$('.fade-bg').stop().fadeIn(300);
		} else {
			hideSearchResult();
		}
	});
	$('.fade-bg').on('click', function(e) {
		if ( $('.search-results').is(':visible') ) {
			hideSearchResult();
		}
	});
	function openBonusesMessage(e,t) {
		$('[data-bonus]').removeClass('is-active');
		var tip = $('.bonuses-message['+t+']');
		if ( !e.parents('.basket').length ) {
			var left = e.offset().left;
			var top = e.offset().top;
		} else {
			var left = e.position().left;
			var top = e.position().top;
		}
		tip.show().css({
			left: left,
			top: top
		}).removeClass('bonuses-message_right-item bonuses-message_right-card');
		e.addClass('is-active');
		if ( ( e.offset().left + tip.outerWidth() ) > $(window).width() ) {
			if ( e.parents('.card').length ) {
				tip.addClass('bonuses-message_right-card');
			} else {
				tip.addClass('bonuses-message_right-item');
			}
		}
		if ( isMobile && e.parents('.card').length ) {
			tip.addClass('bonuses-message_right-card');
		}
	}
	function closeBonusesModal() {
		$('.bonuses-message').hide();
		$('[data-bonus]').removeClass('is-active');
	}
	$('[data-bonus]').on('click', function() {
		closeBonusesModal();
		if ( !$(this).hasClass('is-active') ) {
			openBonusesMessage($(this),$(this).attr('data-bonus'));
		}
	});
	$('.bonuses-message--close').on('click', function() {
		closeBonusesModal();
	});
	$(document).on('click', function(e) {
		if ( !$(e.target).closest('[data-bonus]').length && !$(e.target).closest('.bonuses-message').length ) {
			closeBonusesModal();
		}
	});
	$('input[name="send-code"]').on('keyup', function() {
		var t = $(this).parents('.basket-balance__tab').find('[data-go]');
		if ( $(this).val() !== '' ) {
			t.removeClass('is-disabled');
		} else {
			t.addClass('is-disabled');
		}
	});
	function checkBalanceTabs(e) {
		var t = e.parents('.basket-balance__tab');
		t.siblings('[data="'+e.attr('data-go')+'"]').addClass('is-visible').siblings('.basket-balance__tab').removeClass('is-visible');
	}
	$('.basket-balance__tab [data-go="2"]').on('click', function() {
		if ( !$(this).hasClass('is-disabled') ) {
			checkBalanceTabs($(this));
		}
	});
	$('.basket-balance__tab [data-go="1"]').on('click', function(e) {
		e.preventDefault();
		checkBalanceTabs($(this));
	});
	$('.ordering__delivery--item').on('click', function() {
		if ( !$(this).hasClass('is-active') ) {
			$(this).addClass('is-active').siblings().removeClass('is-active');
		}
	});
	$('[data-checkable]').each(function() {
		if ( $(this).find('input[type="checkbox"]').is(':checked') ) {
			$(this).addClass('is-checked');
		}
	});
	$('[data-checkable] input[type="checkbox"]').on('change', function() {
		var t = $(this).parents('[data-checkable]');
		if ( $(this).is(':checked') ) {
			t.addClass('is-checked');
		} else {
			t.removeClass('is-checked');
		}
	});
	$('.ordering-details--goods_drop').on('click', function() {
		var t = $(this).parents('.ordering-details').find('.ordering-goods');
		if ( !$(this).hasClass('is-dropped') ) {
			t.addClass('is-visible');
			$(this).addClass('is-dropped');
		} else {
			t.removeClass('is-visible');
			$(this).removeClass('is-dropped');
		}
	});
	$('.select-custom').selectric();
	$('.item-elem').on('mouseenter', function() {
		if  ( !isMobile ) {
			var title = $(this).find('.item-elem--title');
			title.outerHeight('auto');
			var margin = title.outerHeight()-54;
			$(this).css({
				marginBottom: -margin
			});
			if ( $('[data-bonus]').hasClass('is-active') ) {
				openBonusesMessage($('[data-bonus].is-active'),$('[data-bonus].is-active').attr('data-bonus'));
			}
		}
	});
	$('.item-elem').on('mouseleave', function() {
		if  ( !isMobile ) {
			var title = $(this).find('.item-elem--title');
			title.outerHeight(54);
			$(this).css({
				marginBottom: 0
			});
			if ( $('[data-bonus]').hasClass('is-active') ) {
				openBonusesMessage($('[data-bonus].is-active'),$('[data-bonus].is-active').attr('data-bonus'));
			}
		}
	});
	$('.autorization__nav a').on('click', function(e) {
		e.preventDefault();
		var p = $(this).parents('li');
		if ( !p.hasClass('is-active') ) {
			var tabs = $(this).parents('.autorization__group').find('.autorization__tab');
			tabs.removeClass('is-visible').filter('[data="'+$(this).attr('href')+'"]').addClass('is-visible');
			p.addClass('is-active').siblings().removeClass('is-active');
		}
	});
	$('.autorization__type a').on('click', function(e) {
		e.preventDefault();
		var p = $(this).parents('li');
		if ( !p.hasClass('is-active') ) {
			var tabs = $(this).parents('.autorization__tab').find('.autorization__form');
			tabs.removeClass('is-visible').filter('[data="'+$(this).attr('href')+'"]').addClass('is-visible');
			p.addClass('is-active').siblings().removeClass('is-active');
		}
	});
	if ( $('[data-pos-scroll]').length && $('[data-pos-fixed]').length ) {
		$(document).on('ready scroll resize', function() {
			var t = $('[data-pos-scroll]');
			var f = $('[data-pos-fixed]');
			if ( !isMobile ) {
				if ( $('.basket').length ) {
					var shift = 10;
				} else {
					var shift = -20;
				}
				var pos = $(document).scrollTop();
				var start = f.offset().top+shift;
				var end = start+f.outerHeight()-t.outerHeight();
				if ( pos > start && pos < end  ) {
					var diff = pos-start;
				} else if ( pos <= start ) {
					var diff = 0;
				} else if ( pos >= end ) {
					var diff = end-start;
				}
			} else {
				var diff = 0;
			}
			t.css({
				'-webkit-transform': 'translateY('+diff+'px)',
				'transform': 'translateY('+diff+'px)'
			});
		});
	}
});
$('.filter__group').each(function() {
	var size = $(this).find('.filter__list li').size();
	if ( size <=3 ) {
		$(this).find('.filter--more').hide();
	}
});
function setFilterDrop(e) {
	var group = e.parents('.filter__group');
	var elem = group.find('.filter__list');
	if ( e.hasClass('is-active') ) {
		elem.addClass('is-visible');
	} else {
		elem.removeClass('is-visible');
	}
}
$('.filter--more').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('is-active');
	setFilterDrop($(this));
});
function setFilter(e,s) {
	var label = e.parents('label');
	if ( e.is(':'+s) ) {
		label.addClass('is-'+s);
	} else {
		label.removeClass('is-'+s);
	}
}
$('.filter__list input[type="checkbox"]').each(function() {
	if ( $(this).is(':checked') ) {
		setFilter($(this),'checked');
	}
	if ( $(this).is(':disabled') ) {
		setFilter($(this),'disabled');
	}
});
$('.filter__list input[type="checkbox"]').on('change', function() {
	setFilter($(this),'checked');
});
function clearFilter(e) {
	var filter = e.parents('.filter');
	filter.find('.filter__list input[type="checkbox"]').each(function() {
		$(this).prop('checked',false).trigger('change').uniform();
	});
}
$('.filter--clear').on('click', function(e) {
	e.preventDefault();
	clearFilter($(this));
})
function setSpecialSlider(t) {
	setRatio();
	if ( t.hasClass('slick-initialized') ) {
		t.slick('unslick');
	}
	t.addClass('is-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1020,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.special').addClass('is-locked');
}
$('.container').on('click', '.filter-side--toggle', function() {
	$(this).toggleClass('is-dropped');
});