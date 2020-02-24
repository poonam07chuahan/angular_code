$(document).ready(function() {
//    $(document).click(function(e) 
//{
//    var myNav = $("#myNav");
//
//    // if the target of the click isn't the container nor a descendant of the container
//    if (!myNav.is(e.target) && myNav.has(e.target).length === 0) 
//    {
//        myNav.css({"width":0});
//    }
//});
	
	$(document).ready(function(){
		$('.faqheading').click(function() {
		$('.faqheading').removeClass('active');
		$(this).addClass('active');

		$('.faqheading').removeClass('active');
		$(this).addClass('active');
		});

		$(".collapse.show").each(function(){
			$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
		});
		$(".collapse").on('show.bs.collapse', function(){
			$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
		}).on('hide.bs.collapse', function(){
			$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
		});
	});
	
	// this function is use to parallax effect on home page
	const parallaxEls = document.querySelectorAll("[data-speed]");
	window.addEventListener("scroll", scrollHandler);
	function scrollHandler() {
		for (const parallaxEl of parallaxEls) {
		const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
		const transformY = this.pageYOffset * parallaxEl.dataset.speed;
		if (parallaxEl.classList.contains("banner-title")) {
			parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
		} else if (parallaxEl.classList.contains("banner-subtitle")) {
			parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
		} else {
			parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
		}
		}
	}
	// this function is use to header fixed on page scroll
	$(window).on("scroll", function() {
		if ($(window).scrollTop() >= 80) {
		$(".navbar").addClass("compressed");
		} else {
		$(".navbar").removeClass("compressed");
		}
	});

	// this function is use for submenu
	$(document).ready(function() {
		$(".add-more-link > a").click(function(){
			$(".submenu-overlay").slideToggle("slow");
		});
	});


	$('.testimonial-slider').owlCarousel({
		loop: true,
	   margin: 10,
	   dots: true,
		nav: false,
	   navText: ['<img src="images/right-arrow.png">', '<img src="images/left-arrow.png">'],
	   responsiveClass: true,
	   center:false,
	   responsive: {
		   0: {
			   items: 2,
			
		   },
		   600: {
			   items:3,
			  
		   },
		   1000: {
			   items: 4,
			   margin: 20
		   }
	   }
   })
	
});

