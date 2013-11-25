$(function() {
	$('.transition-switch input').on('change', function() {
		$('.old,.new').removeClass('old new').addClass($(this).val());
	});
	$('.navbar-toggle, .navbar-collapse li a').on('click', function() {
		$('.navbar-collapse').toggleClass('in');
	});
	$('.panel-group .panel-title a').on('click', function(e) {
		$(this).closest('.panel').find('.panel-collapse').toggleClass('in');
		e.preventDefault();
	});
});