//Horizontal Dropdown Menu
$(document).ready(function() {
	$(".toggleMenu").css("display", "none");
	$(".mynav li").hover(function() {
	 	$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});
});


// Converting Hover to Click
$(document).ready(function() {
	var ww = document.body.clientWidth;
	if (ww < 800) {
		$(".toggleMenu").css("display", "inline-block");
		$(".mynav li a").click(function() {
			$(this).parent("li").toggleClass('hover');
		});
	} else {
		$(".toggleMenu").css("display", "none");
		$(".mynav li").hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
	}
});

$(".mynav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	if (ww < 800) {
		$(".toggleMenu").css("display", "inline-block");
		$(".mynav li a.parent").click(function(e) {
			e.preventDefault();
		 	$(this).parent("li").toggleClass('hover');
		});
	} else {
}

//Toggle the Menu

$(".toggleMenu").click(function(e) {
	e.preventDefault();
	$(".mynav").toggle();
});

if (ww < 800) {
	$(".toggleMenu").css("display", "inline-block");
	$(".mynav").hide();
} else {
    
}
    
// Window Events
    
var ww = document.body.clientWidth;
$(document).ready(function() {
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(".mynav").toggle();
	});
	$(".mynav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	adjustMenu();
});
function adjustMenu() {
	if (ww < 800) {
		$(".toggleMenu").css("display", "inline-block");
		$(".mynav").hide();
		$(".mynav li a.parent").click(function(e) {
			e.preventDefault();
		 	$(this).parent("li").toggleClass('hover');
		});
	} else {
		$(".toggleMenu").css("display", "none");
		$(".mynav li").hover(function() {
		 		$(this).addClass('hover');
			}, function() {
				$(this).removeClass('hover');
		});
	}
}
 //call the function as the browser is resized  
$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});
    
// Showing and Hiding
    
$(document).ready(function() {
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".mynav").toggle();
	});
});
	if (ww < 800) {
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".mynav").hide();
		} else {
			$(".mynav").show();
		}
		$(".mynav li a.parent").click(function(e) {
			e.preventDefault();
		 	$(this).parent("li").toggleClass('hover');
		});
	}
    
//10 Unbinding Hover Events
$(".mynav li").unbind('mouseenter mouseleave');
    if (ww < 800) {
	$(".toggleMenu").css("display", "inline-block");
	if (!$(".toggleMenu").hasClass("active")) {
		$(".mynav").hide();
	} else {
		$(".mynav").show();
	}
	$(".mynav li").unbind('mouseenter mouseleave');
	$(".mynav li a.parent").unbind("click").bind("click", function(e){
		e.preventDefault();
	 	$(this).parent("li").toggleClass('hover');
	});
} else {
	$(".toggleMenu").css("display", "none");
	$(".mynav").show();
            $(".mynav li").removeClass("hover");
	$(".mynav li a").unbind("click");
	$(".mynav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		$(this).toggleClass('hover');
	});
}