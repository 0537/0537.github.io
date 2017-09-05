var $window = $(window);
var $doc = $(document);

$doc.ready(function() {

	function checkbox_switching() {
		var checkbox = $('.main-checkbox')
		var checkboxInput = checkbox.find('.main-checkbox__input');

		checkboxInput.click(function() {
			$(this).parent().toggleClass('active');
		});
	}

	function btnTabs_switching() {
		var tab = $('.tabs__item');
		var tab_btn = tab.find('.main-btn');
		var tab_icon = tab.find('.tabs__icon');
		var active = 'tabs__item--active';

		tab.on('mouseenter', function() {
			var ths = $(this);
			var ths_btn = $(this).find('.main-btn');
			var ths_icon = $(this).find('.tabs__icon');

			tab.removeClass(active);
			ths.addClass(active);

			tab_btn.css('transform', 'translateY(8px)')
			tab_icon.css('transform', 'translateY(8px)')

			setTimeout(function() {
				ths_btn.css('transform', 'translateY(15px)');
			}, 100);

			setTimeout(function() {
				ths_icon.css('transform', 'translateY(-15px)');
			}, 150)
		});
	}

	btnTabs_switching();

	checkbox_switching();

	

	$('.main-select').selectmenu({
		width: 350
	});

	$('.rates__titles').slick({
		arrows: false,
		draggable: false,
		infinite: false,
		centerMode: true,
		focusOnSelect: true,
		asNavFor: '.rates__cards',
	});

	$('.rates__cards').slick({
		arrows: false,
		infinite: false,
		asNavFor: '.rates__titles',		
	});

	// if ($window.width() > 992) {
	// 	$window.stellar();
	// }
});