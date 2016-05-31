/**
 * Created by Soloni on 22.05.2016.
 */
$(document).ready(function() {
    var path;

    $("body > div.container.content.project > div > div > div.main-left > div.project-gal > ul > ul > li > img").mouseover(function () {
        $(this).parent().append('<div id="temporary_cover' + '" class="cover"></div>');
        path=$(this);


        $("#temporary_cover").click(function () {
            $("body > div.container.content.project > div > div > div.main-left > div.project-gal > ul > li:first-child img").fadeOut(400, function() {
                $("body > div.container.content.project > div > div > div.main-left > div.project-gal > ul > li:first-child img").attr("src", ""+(path.parent().attr("value"))).fadeIn(400);
            })
        })

        $("#temporary_cover").mouseleave(function () {
            $("#temporary_cover").remove();
        })
    })
})