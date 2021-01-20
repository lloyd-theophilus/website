/*
Template:  Kidschool
Author: author name
Version: 1
Design and Developed by: Devitems
*/
/*================================================
[  Table of contents  ]
================================================
	01. Sticky Menu
	02. Owl Carousel
	03. jQuery MeanMenu
    04. Portfolio Isotope
	05. ScrollUp jquery
	06. wow js active
	07. Mail Chimp
    08. Magnificent Popup
    09. Counter Up
 
======================================
[ End table content ]
======================================*/


(function($) {
    "use strict";
    
/*------------------------------------
    01. Sticky Menu
-------------------------------------- */  
    $(window).on('scroll',function() {    
       var scroll = $(window).scrollTop();
       if (scroll < 245) {
        $(".sticker").removeClass("stick");
       }else{
        $(".sticker").addClass("stick");
       }
    });
	
/*------------------------------------
    02. Owl Carousel
------------------------------------- */
    $(".kid-owl-slider").owlCarousel({
		autoPlay: 8000, 
        items : 1,
		slideSpeed:500,
		pagination:true,
		navigation:false,	  
		loop:true,
		mouseDrag : true,
		singleItem:true,
	    transitionStyle : "fade",
		addClassActive : true,		
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});
    
/*------------------------------------
    About Carousel
------------------------------------- */
	$('.about-owl').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        items : 1,
        responsiveClass:true,
        pagination:false,
        nav:true,
        navText: ["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:1
            }, 
            992:{
                items:1
            }, 
            1200:{
                items:1
            }
		}       
    }); 
        
/*------------------------------------
    Teacher Carousel
------------------------------------- */
	$('.teacher-owl').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        items : 1,
        responsiveClass:true,
        pagination:false,
        dots:false,
        nav:true,
        navText: ["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:3
            }, 
            992:{
                items:4
            }, 
            1200:{
                items:4
            }
		}       
    }); 
    
/*------------------------------------
    Testimonial Carousel
------------------------------------- */
	$('.testimonial-owl').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 1,
        responsiveClass:true,
        nav:true,
        navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
        pagination:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:1
            }, 
            992:{
                items:1
            }, 
            1200:{
                items:1
            }
		}       
    }); 
   
/*------------------------------------
    Event Carousel
------------------------------------- */
	$('.event-owl').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 1,
        responsiveClass:true,
        nav:true,
        navText: ["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
        pagination:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:2
            }, 
            992:{
                items:2
            }, 
            1200:{
                items:2
            }
		}       
    }); 
    
/*------------------------------------
    Single Event Carousel
------------------------------------- */
	$('.single-event-owl').owlCarousel({
		loop:true,
        autoPlay: false, 
        smartSpeed: 2000,
        fluidSpeed: true,
        items : 1,
        responsiveClass:true,
        pagination:false,
        dots:false,
        nav:true,
        navText: ["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:1
            },
            768:{
                items:1
            }, 
            992:{
                items:1
            }, 
            1200:{
                items:1
            }
		}       
    }); 

/*-------------------------------------------
    03. jQuery MeanMenu
--------------------------------------------- */
	$('.main-menu nav').meanmenu({
		meanScreenWidth: "767",
		meanMenuContainer: '.mobile-menu'
	});
    
/*--------------------------
    04. Portfolio Isotope
---------------------------- */
    $('.grid').imagesLoaded( function() {

        // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });	

        // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item',
          }
        });
    });
    
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });	
    
/*-------------------------------------------
    05. ScrollUp jquery
--------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });  
    
/*-------------------------------------------
    06. wow js active
--------------------------------------------- */
    new WOW().init();
 
/*------------------------------------
	07. Mail Chimp
--------------------------------------*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
    });
    
    function mailChimpResponse(resp) {
        
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
            
        } else if(resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }  
    }
    
/*--------------------------
    08. Magnific Popup
---------------------------- */	
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
    
     $('.img-poppu').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    
/*--------------------------
    09. Counter Up
---------------------------- */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    }); 
    
})(jQuery);