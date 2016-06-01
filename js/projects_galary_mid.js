/**
 * Created by Soloni on 22.05.2016.
 */
$(document).ready(function() {

//--------------project_animated_slider-----------------------

    //variable for img path
    var path;

    $(".gal_small_icons img").mouseover(function () {


        //cover over the the image, adding id to control the mouse leave fading
        $(this).parent().append('<div id="temporary_cover" class="cover"></div>');
        path=$(this);

        //fading effect on click, loading selected image
        $("#temporary_cover").click(function () {
            $(".main_gal_screen:first-child img").fadeOut(400, function() {
                $(".main_gal_screen:first-child img").attr("src", ""+(path.parent().attr("value"))).fadeIn(400);
            })
        })

        // On outside ONclick reaction - hiding our tab on click

        $("#temporary_cover").mouseleave(function () {
            $("#temporary_cover").remove();
        })

    })

//--------------project_animated_slider-----------------------

})