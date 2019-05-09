import $ from "jquery"; // importing jQuery, you can delete if not needed
require("./lib/social"); // Twitter intent JS
var Stickyfill = require("stickyfilljs");

Stickyfill.add($(".dataviz-wrapper")[0]);

$(window).on("scroll", function(){



	//starts on zero, and goes while graphic is sticky to scrollEnd
	var scrolledSoFar = $(".dataviz-wrapper").offset().top - $(".dataviz").offset().top;
	var scrollEnd = $(".dataviz").height() - $(".dataviz-wrapper").eq(0).outerHeight();
	var whichPiece = Math.floor(scrolledSoFar/(scrollEnd/4));


	switch(whichPiece) {

	  case 0:
	    $(".dataviz-wrapper img").eq(3).css("opacity",1);
	    $(".dataviz-wrapper img").eq(2).css("opacity",1);
	    $(".dataviz-wrapper img").eq(1).css("opacity",1);
	  	break;

	  case 1:
	    $(".dataviz-wrapper img").eq(3).css("opacity",0);
	    $(".dataviz-wrapper img").eq(2).css("opacity",1);
	    $(".dataviz-wrapper img").eq(1).css("opacity",1);
	    break;

	  case 2:
	    $(".dataviz-wrapper img").eq(3).css("opacity",0);
	    $(".dataviz-wrapper img").eq(2).css("opacity",0);
	    $(".dataviz-wrapper img").eq(1).css("opacity",1);
	    break;

	  case 3:
	    $(".dataviz-wrapper img").eq(3).css("opacity",0);
	    $(".dataviz-wrapper img").eq(2).css("opacity",0);
	    $(".dataviz-wrapper img").eq(1).css("opacity",0);
	  	break;
	}


});

