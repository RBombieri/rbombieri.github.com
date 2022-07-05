$(document).ready(listo);



function listo() 
{
	$(".pagelines").click(function(e) {
		e.preventDefault();
	$("header .container nav").toggleClass("open");
	$(".pagelines i").toggleClass("fa-xmark");
	
	});

	$("header .container nav a").click(function(){

		$("header .container nav").removeClass("open");
		$(".pagelines i").removeClass("fa-xmark");
		
		var dev = $(this).attr("href");

		$("html,body").animate({
			"scrollTop": $(dev).offset().top

		})
	})

}

