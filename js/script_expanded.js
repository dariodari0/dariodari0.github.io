/**
 * @author Dariusz
 */
"use strict"; 

$(document).ready(function()
{
	
	
	 $("ol > li:nth-child(1)").click(function() {
 		$(this).fadeOut(300);
 		$(".mainCointainer").addClass('blur');
 		$("body").css({"overflow":"hidden"});
 		$(".contactForm, .contactMore, .overlay").fadeIn(300);
	});

 $(".overlay").click(function() {
 		$(".contactForm, .contactMore, .overlay").fadeOut(300);
 		$(".mainCointainer").removeClass('blur');
 		$("ol > li:nth-child(1)").fadeIn(300);
 		$("body").css({"overflow":"auto"});
	});
/*
 * Obsługa menu
 */	
 $("ol > li:nth-child(2)").hover(function (e) { 
             if (e)
             {
                 e.preventDefault();
             }
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
      else if(theLastScroll !== anchorClass)
      {
      	     var articleClass = $("article[class='"+ anchorClass +"']");
              if (articleClass.length) {
              var scrollToPosition = articleClass.offset().top - $(window).height()/12;
              $("html,body").animate({scrollTop: scrollToPosition }, 950 );
             }
    	}
      else
      {
      	return;
      }
    theLastScroll = anchorClass;
    });
 /*
  * Obsługa formularza kontaktowego
  */    	
 
$("#contForm").submit(function(e) {

	var adressURL = window.location.href;
	var plOReng = adressURL.indexOf("en"); // zwraca index lub -1 jesli nie zawiera
	var inputs = $("#contForm").serialize();
    var url = "https://www.enformed.io/js770kx4ii"; 
    
    $.ajax({
           type: "POST",
           url: url,
           data: inputs,
           success: function()
           {
           console.log("success");
           
                    var input = document.getElementsByTagName("input");
           	        var submitButton = document.getElementById("submitBtn");
               		
					for (var index in input) {
						input[index].disabled = true;
					}
					submitButton.style.color = "#2ECC71";
					
					if (plOReng === -1)
					{
						submitButton.value = "Wysłane!";
						setTimeout(function()
						      { 
						      	submitButton.value = "Dziękuję!";
						      }, 1500
						  );
					}
					else
					{
						submitButton.value = "Sent!";
						setTimeout(function()
						      { 
						      	submitButton.value = "Thank you!";
						      }, 1500
						  );
					}	
       	   },
           error: function()
           {
           console.log("error.");
           alert("There is the problem. Please use: dmarkowicz@outlook.com, sorry.");         	        			
           }
         });
    e.preventDefault();
});

    
});
 
