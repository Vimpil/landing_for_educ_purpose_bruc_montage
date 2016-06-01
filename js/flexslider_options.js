/**
 * Created by Vimpil1 on 22.04.2016.
 */

jQuery(document).ready(function () {

    //--------------down_float_menu-----------------------

    jQuery('.flexslider').flexslider({
        animation: "fade",
        start: function (slider) {
            flexslider = slider; //Initializing flexslider here.
        }
    });

    //Next and Prev buttons of galleries, function will look for the ID value of closest parent by the clicked button
    $(".tab-next").click(function(){
        $("#"+($(this).closest("[id]").attr("id"))+" a.flex-next").click();
    });

    $(".tab-prev").click(function(){
        $("#"+($(this).closest("[id]").attr("id"))+" a.flex-prev").click();
    });

    $( "div.art-right").click(function() {
        $("#"+($(this).closest("[id]").attr("id"))+" li.flex-nav-next a").click();
    });

   $( "div.art-left").click(function() {
       $("#"+($(this).closest("[id]").attr("id"))+" li.flex-nav-prev a").click();
    });

    //--------------down_float_menu-----------------------

})