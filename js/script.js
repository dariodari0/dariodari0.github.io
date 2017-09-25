/**
 * @author Dariusz
 */
window.onload = function () {
};
/*
 * Obsługa panelu kontaktowego
 */
 $('ol > li:nth-child(1)').click(function() {
 		$(this).fadeOut(300);
 		$('.contactForm, .contactMore, .overlay').fadeIn(300);
	});

 $('.overlay').click(function() {
 		$('.contactForm, .contactMore, .overlay').fadeOut(300);
 		 $('ol > li:nth-child(1)').fadeIn(300);
	});
/*
 * Obsługa menu
 */	
 $('ol > li:nth-child(2)').hover(function () {   
 		$("ol > li:nth-child(2) > a").slideToggle(250);
        $("ul > li" ).slideToggle(250);
    });
/*
 * Nawigowanie z poziomu menu
 */
   
var theLastScroll;

$("a").click(function(){
	var gotop = "goTop";
	var anchorClass = $(this).attr("class");
    
    if (anchorClass === gotop) {$(window).scrollTop(0);}
    else if(theLastScroll === anchorClass) return;
    else {
    		var articleClass = $("article[class='"+ anchorClass +"']");
 							$('html,body').animate({scrollTop: articleClass.offset().top - $(window).height()/12}, 950 );
    	}
    theLastScroll = anchorClass;
});
