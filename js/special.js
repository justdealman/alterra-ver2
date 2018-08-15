function loadSpecial(e) {

	var checkers = e.parents('.filter').find('.filter__list input[type="checkbox"]');
	
	var grid = $('.special__grid');
	var container = $('.special__products');
	
	var content,
		products;
	
	var needSlider;
	
	$('.special').removeClass('is-locked');
	
	$('.special__description').empty().removeClass('is-visible');

	checkers.each(function() {
		if ( $(this).is(':checked') ) {
			content = '../modules/special-item.html';
			products = '../modules/products-all.html';
			needSlider = true;
			return false;
		} else {
			content = '../modules/special-all.html';
			products = '';
			needSlider = false;
		}
	});

	grid.removeClass('is-slider slick-initialized slick-slider');
	grid.addClass('is-loading');
	grid.load(content, function() {
		setImgCover();
		if ( grid.find('.special__item').size() > 1 && needSlider ) {
			setSpecialSlider(grid);
		}
		grid.removeClass('is-loading');
	});

	container.removeClass('is-visible');
	if ( products !== '' ) {
		container.load(products, function() {
			setImgContain();
			container.find('select.custom').selectric();
			container.find('input[type="checkbox"]').uniform();
		}).addClass('is-visible');
	} else {
		container.empty();
	}
}

function setSpecialHeight() {
	$('.special').css({
		'min-height': $('.special').outerHeight()
	});
}
function clearSpecialHeight() {
	$('.special').css({
		'min-height': 0
	});
}

$('.filter__list label').each(function() {
	var check = $(this).find('input[type="checkbox"]');
	if ( check.is(':checked') ) {
		loadSpecial($(this));
	}
});

$('.filter__list input[type="checkbox"]').on('change', _.debounce(function() {
	setSpecialHeight();
	$.when(loadSpecial($(this))).then(function() {
		setTimeout(function() {
			clearSpecialHeight();
		}, 200);
	});
}, 100));

function loadItem(e) {
	var container = $('.special__products');
	var products = '../modules/products-item.html';
	container.removeClass('is-visible');
	container.load(products, function() {
		setImgContain();
		container.find('select.custom').selectric();
		container.find('input[type="checkbox"]').uniform();
	}).addClass('is-visible');

	var description = $('.special__description');
	var information = '../modules/products-description.html';
	description.removeClass('is-visible');
	description.load(information).addClass('is-visible');
}

$(document).on('click', '.special__grid.is-slider .special__item', function(e) {
	if ( e.target.className !== 'special--more' && !$(this).hasClass('is-disabled') ) {
		e.preventDefault();
		setSpecialHeight();
		$.when(loadItem($(this))).then(function() {
			setTimeout(function() {
				clearSpecialHeight();
			}, 200);
		});
		$(this).addClass('is-disabled').siblings().removeClass('is-disabled');
	}
});