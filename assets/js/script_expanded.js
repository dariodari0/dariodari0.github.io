/**
 * @author Dariusz
 */
"use strict";

$(document).ready(function() {
    $("ol > li:nth-child(1)").click(function() {
        $(this).fadeOut(300);
        $(".mainCointainer").addClass('blur');
        $("body").css({
            "overflow": "hidden"
        });
        $(".contactForm, .contactMore, .overlay").slideDown(300);
    });

    $(".overlay").click(function() {
        $(".contactForm, .contactMore, .overlay").fadeOut(222);
        $(".mainCointainer").removeClass('blur');
        $("ol > li:nth-child(1)").slideDown(300);
        $("body").css({
            "overflow": "auto"
        });
    });
    /*
     * Menu - remove the bug with mouse handler event  [updating on 24 January 2018]
     */
    $("ul").on('mouseenter', function() {
            $("ol > li:nth-child(2) > a").slideUp();
            $("ul > li").slideDown();
        })
        .on('mouseleave', function(e) {
            let menuCoords = $(this).position();
            isMouseleave(e, menuCoords);
        });
	//ES6 and jQuery
    let isMouseleave = (e, menuCoords) => {
        let x;
        e = e || window.event; //for IE support
        x = e.clientX;
        if (x < menuCoords.left) {
            $("ol > li:nth-child(2) > a").slideDown();
            $("ul > li").slideUp('fast');
        }
        false;
    }
 
    /*
     * Navigation function
     */
    let theLastScroll;
    $("ul, footer").on('click', 'a', function() {
        const gotop = "goTop";
        let anchorClass = $(this).attr("class");
        if (anchorClass === gotop) {
            $(window).scrollTop(0);
        } else if (theLastScroll !== anchorClass) {
            let articleClass = $("article[class='" + anchorClass + "']");
            if (articleClass.length) {
                let scrollToPosition = articleClass.offset().top - $(window).height() / -24;
                $("html,body").animate({
                    scrollTop: scrollToPosition
                }, 950);
            }
        }
        theLastScroll = anchorClass;
    });
    /*
     * Script for sending an email
     */

    $("#contForm").submit(function(o) {
        var e = window.location.href,
            t = e.indexOf("pl"),
            l = $("#contForm").serialize(),
            n = "https://www.enformed.io/js770kx4";
        $.ajax({
            type: "POST",
            url: n,
            data: l,
            success: function() {
                var o = document.getElementById("submitBtn");
                o.style.color = "#2ECC71", -1 !== t ? (o.value = "Wysłane!", setTimeout(function() {
                    o.value = "Dziękuję!"
                }, 1500)) : (o.value = "Sent!", setTimeout(function() {
                    o.value = "Thank you!"
                }, 1500)), o.setAttribute("disabled", "disabled")
            },
            error: function() {
                alert("There is the problem. Please use: dmarkowicz@outlook.com or try later, sorry.")
            }
        }), o.preventDefault()
    });


});
 
