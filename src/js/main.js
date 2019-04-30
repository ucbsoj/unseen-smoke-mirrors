import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS


// $(document).ready(function(){

// 	var timer;

// 	$(".dataviz").each(function(){
// 		$(this).height($(this).width() * 2.84);
// 		$(".dataviz-sticky").css("height", $(this).width());
// 	});



// 	$(window).on("scroll", function(){

// 		console.log($(".dataviz img").height());

// 		if($(window).scrollTop() + ($(window).height()/2) > $(".dataviz").offset().top + ($(".dataviz img").height()/2) &&
// 		   $(window).scrollTop() + $(window).height() <  $(".dataviz").offset().top + ($(".dataviz img").height()/2)+ $(".dataviz").height()){
// 			$(".dataviz .dataviz-wrapper").addClass("dataviz-sticky");
// 			$(".dataviz-sticky").css("height", $(".dataviz img").height());
// 			$(".dataviz-sticky").css("width", $(".dataviz").width());
// 		}


// 		if($(window).scrollTop() + $(window).height() >  $(".dataviz").offset().top + ($(".dataviz img").height()/2)+ $(".dataviz").height()){
// 			$(".dataviz .dataviz-wrapper").removeClass("dataviz-sticky").addClass("dataviz-past-sticky");
// 		}


// 	});



// 	$(window).on("resize", function(){

// 		clearTimeout(timer);
// 		timer =	window.setTimeout(function(){
// 			$(".dataviz").each(function(){
// 				$(this).height($(this).width() * 2.84);
// 				$(".dataviz-sticky").css("height", $(this).width());
// 			});
// 		}, 300);
// 	});

// });