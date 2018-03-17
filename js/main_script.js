// JavaScript Document
/* Credit: http://www.templatemo.com */

var menuDisabled = false;
var acc = document.getElementsByClassName("accordion");
var i;

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		}, 6000);
	});
});

jQuery(function($) {
    
    $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('#main-wrapper').delay(350).css({'overflow':'visible'});
    });
    
    $(document).ready( function() {

        loadGoogleMap();
        
        // backstretch for background image
        var defaultImgSrc = $('img.main-img').attr('src');
        $.backstretch(defaultImgSrc, {speed: 500});
	
	// for responsive-menu
	$("#m-btn").click(function(){
		$("#responsive").toggle();
	});
	
        // copy menu list to responsive menu
        var mainMenuList = $('#menu-list').html();
        $('#responsive').html(mainMenuList);
	
	//for image slide on menu item click(normal) and responsive
	$("#menu-list a, #responsive a").on('click',function(e){
            
			
			if(this.className === "external") {
                return;
            }
			
			e.preventDefault();

            if (menuDisabled === false) // check the menu has disabled?
            {
                menuDisabled = true; // disable to menu
                
                var name = $(this).attr('href');
                $('#menu-list li').removeClass('active');
                $('#responsive li').removeClass('active');

                //  set active to both menu
                var menuClass = $(this).parent('li').attr('class');
                $('.'+menuClass).addClass('active');

                // hide responsive menu
                $("#responsive").hide();
                
                // get image url and assign to backstretch for background
                var imgSrc = $("img"+name+"-img").attr('src');
                $.backstretch(imgSrc, {speed: 500}); //backstretch for background fade in/out
                
                // content slide in/out
                $("section.active").animate({left:$("section.active").outerWidth()}, 400,function(){
                    $(this).removeClass("active");
                    $(this).hide();
                    $(name+"-text").show();
                    $(name+"-text").animate({left:'0px'},400,function(){
                        $(this).addClass("active");
                        
                        menuDisabled = false; // enable the menu
                    });
                });
				
				 $("section.active").animate({right:$("section.active").outerWidth()}, 400,function(){
                    $(this).removeClass("active");
                    $(this).hide();
                    $(name+"-secondSection").show();
                    $(name+"-secondSection").animate({left:'0px'},400,function(){
                        $(this).addClass("active");
                       
                        menuDisabled = false; // enable the menu
                    });
                });
                
            }
            return;
	});
        
    });

});

var map = '';

function initialize() {
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(37.769725, -122.462154)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);
}

function loadGoogleMap(){
    // load google map
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);
}

$('.flip').hover(function(){
        $(this).find('.card').toggleClass('flipped');

    });

for (i = 0; i< acc.length; i++){
	acc[i].addEventListener("click", function(){
		/* toggle between adding and removing active class, to highlight the button that controls the panel */
		this.classList.toggle("active");
		
		/* toggle between hiding and showing the active panel*/
		var panel = this.nextElementSibling;
		if(panel.style.maxHeight){
			panel.style.maxHeight = null;
		}else{
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}