$(function () {
	$(".sidemenu li a").on("click",function(){
		var index = $(".sidemenu li a").index(this);
		//var p = $
		console.log(index);
	
		var p = $(".title").eq(index).offset().top - 60;
		
	function scr () {
    $('html,body').animate({ scrollTop: p }, 'fast');
	}

	setTimeout(scr,50);

	});//onclick
});
