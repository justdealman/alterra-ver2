$(function() {
	$('.img-cover').each(function() {
		$(this).parent().css({
			'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
			'background-size': 'cover'
		});
	});
	$('.img-contain').each(function() {
		$(this).parent().css({
			'background': 'url("'+$(this).attr('src')+'") no-repeat center center',
			'background-size': 'contain'
		});
	});
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
			draggable: true
		});
		$('.slider-main .slick-prev').css({
			left: $('.slider-main .slick-dots').position().left-28
		});
		$('.slider-main .slick-next').css({
			right: $('.slider-main .slick-dots').position().left-28
		});
	}
	$('input[type="checkbox"], input[type="radio"]').uniform();
	$('select').selectric();
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
	$('.quantity-e--button_minus').on('click', function(e) {
		e.preventDefault();
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
	});
	$('.quantity-e--button_plus').on('click', function(e) {
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
			draggable: true
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
});