/**
 * Created by Vimpil1 on 22.04.2016.
 */

jQuery(document).ready(function () {

    jQuery('.flexslider').flexslider({
        animation: "fade",
        start: function (slider) {
            flexslider = slider; //Initializing flexslider here.
        }
    });


    // *index HTML*
        $(".tab-next").click(function(){
            $("#"+($(this).closest("[id]").attr("id"))+" a").click();
        });

/*
        // 1.1
        $( "#house .tab-next").click(function() {
            $("#house a").click();
        });

        $( "#house .tab-prev").click(function() {
            $("#house a").click();
        });
*/
        // 1.2

        $( "#bath .tab-next").click(function() {
            $("#bath a").click();
        });

        $( "#bath .tab-prev").click(function() {
            $("#bath a").click();
        });

        // 1.3

        $( "#base .tab-next").click(function() {
            $("#base a").click();
        });

        $( "#base .tab-prev").click(function() {
            $("#base a").click();
        });

        // 1.4

        $("#kitchen .tab-next").click(function() {
            $("#kitchen a").click();
        });

        $("#kitchen .tab-prev").click(function() {
            $("#kitchen a").click();
        });

        // 2

        $("#2st\\ slide_show .art-right").click(function() {
            $("#2st\\ slide_show  a").click();
        });

        $("#2st\\ slide_show .art-left").click(function() {
            $("#2st\\ slide_show a").click();
        });

        // 3

        $("#3st\\ slide_show .art-right").click(function() {
            $("#3st\\ slide_show a").click();

        });

        $("#3st\\ slide_show .art-left").click(function() {
            $("#3st\\ slide_show a").click();
        });

    // *elements*

    // 1.1
    $( ".main-right-slide.main-articles.flexslider .art-right").click(function() {
        $(".main-right-slide.main-articles.flexslider li.flex-nav-next a").click();

    });

   $( ".main-right-slide.main-articles.flexslider .art-left").click(function() {
        $(".main-right-slide.main-articles.flexslider li.flex-nav-prev a").click();
    });

    // 1.2

    $( ".main-right-slide.main-works.flexslider .art-right").click(function() {
        $(".main-right-slide.main-works.flexslider li.flex-nav-next a").click();

    });

    $( ".main-right-slide.main-works.flexslider .art-left").click(function() {
        $(".main-right-slide.main-works.flexslider li.flex-nav-prev a").click();
    });

})