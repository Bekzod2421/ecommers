$(document).ready(function(){
	$(".menu_cat-title").click(function(){
		$(".menu_cat_nav").slideToggle(500);
	})
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	nav: false,
  	dots: true,
  	loop: true,
  });
});

$(document).ready(function(){
  $(".nav-slider").owlCarousel({
  	items: 4,
  	nav: true,
  });
});

$(document).ready(function(){
  $(".brand-slider").owlCarousel({
  	items: 4,
  	margin: 15,
  	nav: true,
  });
});

$(document).ready(function(){
  $(".client-slider").owlCarousel({
  	items: 5,
  	margin: 15,
  	nav: true,
  });
});


$(document).ready(function(){
	$(".delivery_title-1").addClass("active");
	$(".delivery_word-1").addClass("active");
});

$(document).ready(function(){
	$(".delivery_title-1").click(function(){
		$(".delivery_title-1").addClass("active");
		$(".delivery_word-1").addClass("active");
		$(".delivery_title-2").removeClass("active");
		$(".delivery_word-2").removeClass("active");
		$(".delivery_title-3").removeClass("active");
		$(".delivery_word-3").removeClass("active");
	});
});

$(document).ready(function(){
	$(".delivery_title-2").click(function(){
		$(".delivery_title-2").addClass("active");
		$(".delivery_word-2").addClass("active");
		$(".delivery_title-1").removeClass("active");
		$(".delivery_word-1").removeClass("active");
		$(".delivery_title-3").removeClass("active");
		$(".delivery_word-3").removeClass("active");
	});
});

$(document).ready(function(){
	$(".delivery_title-3").click(function(){
		$(".delivery_title-3").addClass("active");
		$(".delivery_word-3").addClass("active");
		$(".delivery_title-1").removeClass("active");
		$(".delivery_word-1").removeClass("active");
		$(".delivery_title-2").removeClass("active");
		$(".delivery_word-2").removeClass("active");
	});
});

$(document).ready(function() {
	$(".contact_article-title").click(function(){
		$(this).parent().find(".contact_article-col").toggleClass("active");
	});
});

$(document).ready(function() {
	$(".pay_address-col").click(function(){
		$(this).parent().find(".pay_address-article").slideToggle();
	});
});

$(document).ready(function(){
	$(".question_nav-link-1").addClass("active");
	$(".question_content-word-1").addClass("active");
});


$(document).ready(function(){
	$(".question_nav-link-1").click(function(){
		$(".question_nav-link-1").addClass("active");
		$(".question_content-word-1").addClass("active");
		$(".question_nav-link-2").removeClass("active");
		$(".question_content-word-2").removeClass("active");
		$(".question_nav-link-3").removeClass("active");
		$(".question_content-word-3").removeClass("active");
		$(".question_nav-link-4").removeClass("active");
		$(".question_content-word-4").removeClass("active");
		$(".question_nav-link-5").removeClass("active");
		$(".question_content-word-5").removeClass("active");
		$(".question_nav-link-6").removeClass("active");
		$(".question_content-word-6").removeClass("active");
		$(".question_nav-link-7").removeClass("active");
		$(".question_content-word-7").removeClass("active");
		$(".question_nav-link-8").removeClass("active");
		$(".question_content-word-8").removeClass("active");
	});
});

$(document).ready(function(){
	$(".question_nav-link-2").click(function(){
		$(".question_nav-link-2").addClass("active");
		$(".question_content-word-2").addClass("active");
		$(".question_nav-link-1").removeClass("active");
		$(".question_content-word-1").removeClass("active");
		$(".question_nav-link-3").removeClass("active");
		$(".question_content-word-3").removeClass("active");
		$(".question_nav-link-4").removeClass("active");
		$(".question_content-word-4").removeClass("active");
		$(".question_nav-link-5").removeClass("active");
		$(".question_content-word-5").removeClass("active");
		$(".question_nav-link-6").removeClass("active");
		$(".question_content-word-6").removeClass("active");
		$(".question_nav-link-7").removeClass("active");
		$(".question_content-word-7").removeClass("active");
		$(".question_nav-link-8").removeClass("active");
		$(".question_content-word-8").removeClass("active");
	});
});

$(document).ready(function(){
	$(".question_nav-link-3").click(function(){
		$(".question_nav-link-3").addClass("active");
		$(".question_content-word-3").addClass("active");
		$(".question_nav-link-2").removeClass("active");
		$(".question_content-word-2").removeClass("active");
		$(".question_nav-link-1").removeClass("active");
		$(".question_content-word-1").removeClass("active");
		$(".question_nav-link-4").removeClass("active");
		$(".question_content-word-4").removeClass("active");
		$(".question_nav-link-5").removeClass("active");
		$(".question_content-word-5").removeClass("active");
		$(".question_nav-link-6").removeClass("active");
		$(".question_content-word-6").removeClass("active");
		$(".question_nav-link-7").removeClass("active");
		$(".question_content-word-7").removeClass("active");
		$(".question_nav-link-8").removeClass("active");
		$(".question_content-word-8").removeClass("active");
	});
});

$(document).ready(function(){
	$(".question_nav-link-4").click(function(){
		$(".question_nav-link-4").addClass("active");
		$(".question_content-word-4").addClass("active");
		$(".question_nav-link-2").removeClass("active");
		$(".question_content-word-2").removeClass("active");
		$(".question_nav-link-3").removeClass("active");
		$(".question_content-word-3").removeClass("active");
		$(".question_nav-link-1").removeClass("active");
		$(".question_content-word-1").removeClass("active");
		$(".question_nav-link-5").removeClass("active");
		$(".question_content-word-5").removeClass("active");
		$(".question_nav-link-6").removeClass("active");
		$(".question_content-word-6").removeClass("active");
		$(".question_nav-link-7").removeClass("active");
		$(".question_content-word-7").removeClass("active");
		$(".question_nav-link-8").removeClass("active");
		$(".question_content-word-8").removeClass("active");
	});
});

$(document).ready(function(){
	$(".question_nav-link-5").click(function(){
		$(".question_nav-link-5").addClass("active");
		$(".question_content-word-5").addClass("active");
		$(".question_nav-link-2").removeClass("active");
		$(".question_content-word-2").removeClass("active");
		$(".question_nav-link-3").removeClass("active");
		$(".question_content-word-3").removeClass("active");
		$(".question_nav-link-4").removeClass("active");
		$(".question_content-word-4").removeClass("active");
		$(".question_nav-link-1").removeClass("active");
		$(".question_content-word-1").removeClass("active");
		$(".question_nav-link-6").removeClass("active");
		$(".question_content-word-6").removeClass("active");
		$(".question_nav-link-7").removeClass("active");
		$(".question_content-word-7").removeClass("active");
		$(".question_nav-link-8").removeClass("active");
		$(".question_content-word-8").removeClass("active");
	});
});

$(document).ready(function(){
	$(".question_nav-link-6").click(function(){
		$(".question_nav-link-6").addClass("active");
		$(".question_content-word-6").addClass("active");
		$(".question_nav-link-2").removeClass("active");
		$(".question_content-word-2").removeClass("active");
		$(".question_nav-link-3").removeClass("active");
		$(".question_content-word-3").removeClass("active");
		$(".question_nav-link-4").removeClass("active");
		$(".question_content-word-4").removeClass("active");
		$(".question_nav-link-5").removeClass("active");
		$(".question_content-word-5").removeClass("active");
		$(".question_nav-link-1").removeClass("active");
		$(".question_content-word-1").removeClass("active");
		$(".question_nav-link-7").removeClass("active");
		$(".question_content-word-7").removeClass("active");
		$(".question_nav-link-8").removeClass("active");
		$(".question_content-word-8").removeClass("active");
	});
});

$(document).ready(function(){
	$(".question_nav-link-7").click(function(){
		$(".question_nav-link-7").addClass("active");
		$(".question_content-word-7").addClass("active");
		$(".question_nav-link-2").removeClass("active");
		$(".question_content-word-2").removeClass("active");
		$(".question_nav-link-3").removeClass("active");
		$(".question_content-word-3").removeClass("active");
		$(".question_nav-link-4").removeClass("active");
		$(".question_content-word-4").removeClass("active");
		$(".question_nav-link-5").removeClass("active");
		$(".question_content-word-5").removeClass("active");
		$(".question_nav-link-6").removeClass("active");
		$(".question_content-word-6").removeClass("active");
		$(".question_nav-link-1").removeClass("active");
		$(".question_content-word-1").removeClass("active");
		$(".question_nav-link-8").removeClass("active");
		$(".question_content-word-8").removeClass("active");
	});
});

$(document).ready(function(){
	$(".question_nav-link-8").click(function(){
		$(".question_nav-link-8").addClass("active");
		$(".question_content-word-8").addClass("active");
		$(".question_nav-link-2").removeClass("active");
		$(".question_content-word-2").removeClass("active");
		$(".question_nav-link-3").removeClass("active");
		$(".question_content-word-3").removeClass("active");
		$(".question_nav-link-4").removeClass("active");
		$(".question_content-word-4").removeClass("active");
		$(".question_nav-link-5").removeClass("active");
		$(".question_content-word-5").removeClass("active");
		$(".question_nav-link-6").removeClass("active");
		$(".question_content-word-6").removeClass("active");
		$(".question_nav-link-7").removeClass("active");
		$(".question_content-word-7").removeClass("active");
		$(".question_nav-link-1").removeClass("active");
		$(".question_content-word-1").removeClass("active");
	});
});

