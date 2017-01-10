$(document).ready(function(){
	$("#btn-1").click(function() {
		$(".right-arm").toggleClass("wave");
	});

	$("#btn-2").click(function() {
		$(".head").toggleClass("headUp");
	});
	$("#btn-3").click(function() {
		$(".left-leg").toggleClass("kick");
	});
	$("#btn-4").click(function() {
		$(".right-arm").toggleClass("right-arm-dance");
		$(".left-arm").toggleClass("left-arm-dance");
		$(".right-leg").toggleClass("right-leg-dance");
		$(".left-leg").toggleClass("left-leg-dance");
		$(".body").toggleClass("spinning");
		$(".head").toggleClass("headMove");
		$(".man").toggleClass("rgb");
	});
	$("#btn-5").click(function() {
		$(".guy").toggleClass("jumper");
	});
	$("#btn-6").click(function() {
		$(".right-eye").toggleClass("eyesRoll");
		$(".left-eye").toggleClass("eyesRoll");
		$(".mouth").toggle(300);
	});
	$(".logo").mouseenter(function() {
		$(".o").addClass("oSlide");
		$(".exclamation").addClass("exclamationUpDown");
	});
	$(".logo").mouseleave(function() {
		$(".o").removeClass("oSlide");
		$(".exclamation").removeClass("exclamationUpDown");
	});	
});