$(function(){

	
	$(".header .topBar .subTop h2,.header .centerHead .shoppingBag h2").click(function() {
		
		$(".topBar .Sub,.shoppingBag .subShopping").not($(this).next()).slideUp();
		$(this).siblings().slideToggle();
		
	});

	$(".tableDetails .rateContainer .comment .btns .btn").click(function() {
		
		
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active");
		} else
		{
			$(this).addClass("active").siblings().removeClass("active");
		}
	});

	$('.label-relative input').on('change', function() {

	    $('.label-relative input').not(this).prop('checked', false);  

	});
		


	$('.rate').raty({
		score:2,
		starOff: 'images/star-off.png',
		starOn: 'images/star-on.png'	
	});
	
	
	$('.rateComment').raty({
		score:0,
		starOff: 'images/starOff2.png',
		starOn: 'images/starOn2.png'	
	});
	
	$('.rateOff').raty({
		score:2,
		readOnly: true,
		starOff: 'images/starOff2.png',
		starOn: 'images/starOn2.png'	
	});
	
	
	$('.the-slider-inner').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: true,
		autoHover: true,
		responsive: true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>'
	});
	
	
	$(".tab-btns li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
	
	  var owlProducts = $('#owlProducts');
	 
	  owlProducts.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	  
	  
	  var owlProducts2 = $('#owlProducts2');
	 
	  owlProducts2.owlCarousel({
	      
	      items : 2, //10 items above 1000px browser width
	      itemsDesktop : [1200,2], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	  
	  var owlProducts3 = $('#owlProducts3');
	 
	  owlProducts3.owlCarousel({
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	  
	  
	
		$('.carousel-indicators').bxSlider({
		  	mode: 'vertical',
 			auto: true,
		    autoControls: true,
		    speed: 500,
	        minSlides: 4,
		    maxSlides: 4,
		    moveSlides: 1,
			nextSelector: '#carousel-next',
			prevSelector: '#carousel-prev',
			nextText: '<i class="fa fa-angle-up"></i>',
			prevText: '<i class="fa fa-angle-down"></i>'
		});
		
		
	  
	
	
	$('[data-toggle="tooltip"]').tooltip(); 
	
	
	
	$('.getting-started').countdown('2018/08/23 07:04:19', function (event) {
        var $this = $(this).html(event.strftime(''
                + '<p><span>%D</span> يوم</p>'
                + '<p><span>%H</span> ساعة</p>'
                + '<p><span>%M</span> دقيقة </p>'
                + '<p><span>%S</span> ثانية</p>'
                ));
    });
    
    
    

	
	$('.sliderTop').bxSlider({
	  	mode: 'vertical',
		auto:true,
		pager: false,
		navigation:true,
		nextSelector: '#sliderTop-prev',
		prevSelector: '#sliderTop-next',
		nextText: '<i class="fa fa-angle-down"></i>',
		prevText: '<i class="fa fa-angle-up"></i>'
	});
	
	
	
		$("#PriceSlider").rangeSlider({
        bounds: { max: 3000,min: 1},
        arrows: false,
        defaultValues: {min: $("#MinPrice").text(), max: $("#MaxPrice").text()},
        symmetricPositionning: true,
        range: {min: 0}
    });
    $("#PriceSlider").bind("valuesChanging", function (e, data) {
        $("#MinPrice").text(parseInt(data.values.min));
        $("#MaxPrice").text(parseInt(data.values.max));

        });
	
			

	var x = $(".Count strong").text();
	
    $(".Count span.plus").click(function () {
    	x++;
    	$(".Count strong").text(x);
    });
    $(".Count span.minus").click(function () {
		
		if(x > 1) {
			x--;
			var $this = $(".Count strong");
			$(".Count strong").text(x);
		}
    });
	
	
	
	
	
	$(".accordion.active .accordion-content").css("display","block");
	
	$(".accordion .accordion-title").click(function () {
		
		var accordId = $(this).parent().parent().attr("id");
				
		$(this).next().slideToggle(500);
		
		$("#"+accordId + " .accordion-content").not($(this).next()).slideUp(500);
		
		$(this).parent().toggleClass("active").siblings().removeClass("active");
				
	});
	
	

	$(".select-durtion").click(function (){

		$(this).children().first().children().eq(1).toggle();
		
		
	});
	
	$(".select-durtion li ul li").click(function (){

		var myButton = $(this).attr("id");
		var value = $(this).attr("value");

		$(this).addClass("active").siblings().removeClass("active");
		
		  $(this).parent().parent().children().first().text(myButton);

		$(".vps-price .header-panel .price-tabs-"+value).hide();
		
		$("." + myButton +"-"+value).fadeIn();
		
		
	});
	
	$(".information .address .map-style a").click(function () {
		
		$(".information .address iframe").slideToggle();
		
	});
	
	
	
	
	
});
