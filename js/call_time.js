/**
 * Created by Soloni on 14.05.2016.
 */
$(document).ready(function(){

    var clicks=0;

    $("#inner_time_menu_ID > li").on("click",function(e) {
        if(clicks==0){
            $("#inner_time_menu_ID > ul").removeClass("none");
            clicks=1;
            e.stopPropagation();        }
        else {
            $("#inner_time_menu_ID > ul").addClass("none");
        }
    });

    var allOptions = $("#inner_time_menu_ID > ul").children('li:not(.init)');
    $("#inner_time_menu_ID > ul > li").on("click", function() {
        allOptions.removeClass('selected');
        $(this).addClass('selected');
        $("#inner_time_menu_ID > li").empty();
        $("#inner_time_menu_ID > li").append($(this).text());
        $("#inner_time_menu_ID > ul").addClass("none");
        clicks=0;
    });

    $(document).click(function(e){
        if (clicks==1){
            $("#inner_time_menu_ID > ul").addClass("none");
            clicks=0;
        }
    })
});