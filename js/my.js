    $(document).ready(function() {
    	$('#image-gallery').lightSlider({
    		gallery:true,
    		item:1,
    		thumbItem:9,
    		slideMargin: 0,
    		speed:500,
    		auto:false,
    		loop:true,
			currentPagerPosition:'left',
    		onSliderLoad: function() {
    			$('#image-gallery').removeClass('cS-hidden');
    		}  
    	});

    	$(window).scroll(function() {
    		if ($(this).scrollTop() > 100) {
    			$('#goTop').fadeIn();
    		} else {
    			$('#goTop').fadeOut();
    		}
    	});

    	$('#openNav').click(function(){
    		$('#mySidenav').css({"width":"100%"});
    		$('#mySidenav2').css({"width":"0"});
    	});

    	$('#closeNav').click(function(){
    		$('#mySidenav').css({"width":"0"});
    	});

    	$('#openNav2').click(function(){
    		$('#mySidenav2').css({"width":"100%"});
    		$('#mySidenav').css({"width":"0"});
    	});

    	$('#closeNav2').click(function(){
    		$('#mySidenav2').css({"width":"0"});
    	});

    	$('#goTop').click(function() {
    		$("html, body").animate({ scrollTop: 0 }, 600);
    		return false;
    	});

    	$('.fa-caret-down').click(function(){
    		$(this).next('.menu-mobile-dropdown').toggle(300);
    	});

    	$('.cate-mobile').click(function() {
    		$('.category-list').toggleClass('show');
    	});

    	$('.search-button').click(function() {
    		$('.search input').toggleClass('show');
    	});

    	$('.fa-plus-circle').click(function(e) {
    		$(this).next('.dropdown-content').toggleClass('show');
    	});

    	$("#ct").click(function() {
    		$('html, body').animate({
    			scrollTop: $("#myct").offset().top
    		}, 2000);
    	});

    	$("#dg").click(function() {
    		$('html, body').animate({
    			scrollTop: $("#mydg").offset().top
    		}, 2000);
    	});

    // Increment & decrement cart
    var x = 1;
    var span = document.querySelector('.btn-value');
    var increment = document.getElementById('increment');
    var decrement = document.getElementById('decrement');
    
    if(increment){
    	increment.addEventListener('click', function() {
 		x++;
    		span.textContent = x;
    	});
    }
    if(decrement){
    	decrement.addEventListener('click', function() {
		x--;
    	    span.textContent = x;
    	    if (parseInt(x) <= 0) {
    	        span.textContent = "1";
    	        x = 1;
    	    }
    	});
    }
    
});


    $(window).resize(function() {
    	var width = $(window).width();
    	if (width < 768){
    		$('.content-product-detail-del').removeAttr('id');
    		$('.tab-detail-del').hide();
    	}
    });

    function myFunction() {
    	var dots = document.getElementById("dots");
    	var moreText = document.getElementById("more");
    	var btnText = document.getElementById("myBtn");

    	if (dots.style.display === "none") {
    		dots.style.display = "inline";
    		btnText.innerHTML = "Xem đầy đủ";
    		moreText.style.display = "none";
    	} else {
    		dots.style.display = "none";
    		btnText.innerHTML = "Rút gọn";
    		moreText.style.display = "inline";
    	}
    }
