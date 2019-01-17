$(function(){
	/*$(".erweima").find("img").eq(0).mouseover(function(){
		$("this").stop().animate({"left":"100px"},1000);
	})*/
	$("#erweima img").eq(0).mouseover(function(){
		$(this).animate({"left":"80px"},500)
		.next().fadeIn();
	})
})
