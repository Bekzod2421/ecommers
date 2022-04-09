$(document).ready(function(){
	$(".menu_cat-title").click(function(){
		$(".menu_cat_nav").slideToggle(500);
	});

	$(".kod_product_img li a").click(function(){
		var a = $(this).find("img").attr('src');
		$(".kod_product_large").find("img").attr('src', a);
	});

	$(".order_color a").click(function(){
		$(".order_color a").empty();
		$(this).append( "<div></div>");
		var c = $(this).css("background-color");
		$(this).find('div').css('border-color', c);
	});

	function refreshSwatch() {
		$( ".scale_slider" ).find("div").css({"background-color":"#f15045", "height":"2px"});
	}

	$(function() {
		  $( ".scale_slider" ).slider({
			    orientation: "horizontal",
			    range: "min",
			    max: 4,
			    step:1,
			    value: 0,
			    slide: refreshSwatch,
			    change: refreshSwatch
		  });
	});

	// (function($) {
  $(function() {
    $("ul.ptabs_caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.ptabs")
        .find("div.ptabs_content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });

  $(function() {
    $("ul.umes_tabs-btn").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.umes_tabs")
        .find("div.umes_tabs-itms")
        .find("div.umi-wrap")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });

  $('.ucb_btn-openner').on("click", function(){
    $(this).toggleClass("opened");
    $(this).parents(".ucb").parent().find(".ucbtab").slideToggle(500);
  });

  $('.stab_top').on("click", function(){
    $(this).parent().toggleClass("opened");
    $(this).next().slideToggle(200);
  });
  
  $('.cblt_check a').on("click", function(){
    $(this).toggleClass("active");
  });

  $('.pslide').owlCarousel({
    loop:true,
    items:5,
    margin:2,
    nav:true,
    // // dots:false,
    navText: ["<div></div>","<div></div>"],
    // responsive:{
    //     0:{
    //         // items:1,
    //         // nav:true
    //     },
    //     1024:{
    //         // items:1,
    //         // nav:true
    //     }
    // }
	});

  $('.comslide').owlCarousel({
    loop:false,
    items:3,
    margin:0,
    nav:true,
    // // dots:false,
    navText: ["<div></div>","<div></div>"]
    // responsive:{
    //     0:{
    //         // items:1,
    //         // nav:true
    //     },
    //     1024:{
    //         // items:1,
    //         // nav:true
    //     }
    // }
  });

  // $('.pslide .owl-nav .owl-next').hover(function(){
  //   $(this).children('img').each(function () {
  //           var $e = $(this);
  //           var imgURL = $e.prop('src');
  //           $.get(imgURL, function (data) {
  //             var $svg = $(data).find('svg');
  //             $svg.find('.cls-1').css('fill', '#fff');
  //             $svg.find('.cls-2').css('fill', '#fff');
  //             $svg.find('.cls-3').css('fill', '#fff');
  //             $svg.find('.cls-4').css('fill', '#fff');
  //             $svg.find('.cls-5').css('fill', '#fff');
  //             $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
  //           });
  //       });
  //     },
  //           function(){
  //               $(this).children('img').each(function () {
  //               var $e = $(this);
  //               var imgURL = $e.prop('src');
  //               $.get(imgURL, function (data) {
  //                 var $svg = $(data).find('svg');
  //                 $svg.find('.cls-1').css('fill', '#db1818');
  //                 $svg.find('.cls-2').css('fill', '#db1818');
  //                 $svg.find('.cls-3').css('fill', '#db1818');
  //                 $svg.find('.cls-4').css('fill', '#db1818');
  //                 $svg.find('.cls-5').css('fill', '#db1818');
  //                 $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
  //               });
  //           });
  //           }
  //     );

  // $('.pslide .owl-nav .owl-prev').hover(function(){
  //   $(this).children('img').each(function () {
  //           var $e = $(this);
  //           var imgURL = $e.prop('src');
  //           $.get(imgURL, function (data) {
  //             var $svg = $(data).find('svg');
  //             $svg.find('.cls-1').css('fill', '#fff');
  //             $svg.find('.cls-2').css('fill', '#fff');
  //             $svg.find('.cls-3').css('fill', '#fff');
  //             $svg.find('.cls-4').css('fill', '#fff');
  //             $svg.find('.cls-5').css('fill', '#fff');
  //             $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
  //           });
  //       });
  //     },
  //           function(){
  //               $(this).children('img').each(function () {
  //               var $e = $(this);
  //               var imgURL = $e.prop('src');
  //               $.get(imgURL, function (data) {
  //                 var $svg = $(data).find('svg');
  //                 $svg.find('.cls-1').css('fill', '#db1818');
  //                 $svg.find('.cls-2').css('fill', '#db1818');
  //                 $svg.find('.cls-3').css('fill', '#db1818');
  //                 $svg.find('.cls-4').css('fill', '#db1818');
  //                 $svg.find('.cls-5').css('fill', '#db1818');
  //                 $e.prop('src', "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent($svg.prop('outerHTML')))));
  //               });
  //           });
  //           }
  //     );


});
