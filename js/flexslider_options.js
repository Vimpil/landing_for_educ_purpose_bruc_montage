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
            $("#"+($(this).closest("[id]").attr("id"))+" a.flex-next").click();
        });

        $(".tab-prev").click(function(){
            $("#"+($(this).closest("[id]").attr("id"))+" a.flex-prev").click();
        });
    // *elements*

    // 1.1
    $( "div.art-right").click(function() {
        $("#"+($(this).closest("[id]").attr("id"))+" li.flex-nav-next a").click();

    });

   $( "div.art-left").click(function() {
       console.log("clicked");
       $("#"+($(this).closest("[id]").attr("id"))+" li.flex-nav-prev a").click();
    });
})