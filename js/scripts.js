$(window).scroll(function(){
	var wScroll = $(window).scrollTop();
	
	$(".movimento-poster").css("background-position", "right "+(wScroll*0.75)+"px");

	$(".movimento-textbox").css('top', -8+(wScroll*0.005)+"em");
});