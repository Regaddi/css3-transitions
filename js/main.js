$(function() {
	$('.transition-switch input').on('change', function() {
		$('.old,.new').removeClass('old new').addClass($(this).val());
	});
	$('.navbar-toggle, .navbar-collapse li a').on('click', function() {
		$('.navbar-collapse').toggleClass('in');
	});
	$('.push-down-toggle').on('click', function() {
		var $target = $($(this).data('target'));
		$(this).toggleClass('active');
		$target.toggleClass('in');
	});
});