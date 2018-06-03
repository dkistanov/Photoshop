
$(document).ready(function(){
    $('#top').click( function(){
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 750); 
        }
	    return false; 
    });
});

$(document).ready(function(){
    $('.scroll__to-features').click( function(){
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
	    return false; 
    });
});

$(document).ready(function(){
    $('.scroll__to-lesson').click( function(){
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
	    return false; 
    });
});

// menu 

$('.burger-menu').on('click', function(){
    $('.menu__popup').css({'left':'0px','opacity':'1'});
})

$('.menu__close').on('click', function(){
    $('.menu__popup').css({'left':'-200%','opacity':'0'});
})