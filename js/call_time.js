/**
 * Created by Soloni on 14.05.2016.
 */
$(document).ready(function(){

//--------------inner_time_menu-----------------------
    //inner_time_menu
    //var with clicks count
    var clicks=0;

    $("#inner_time_menu_ID > li").on("click",function(e) {
        if(clicks==0){
            $("#inner_time_menu_ID > ul").removeClass("none");
            clicks=1;
            //stopping another functions that hides our menu
            e.stopPropagation();
        }
        else {
            $("#inner_time_menu_ID > ul").addClass("none");
        }
    });

    //choosing needed option
    $("#inner_time_menu_ID > ul > li").on("click", function() {
        $("#inner_time_menu_ID > li").empty();
        $("#inner_time_menu_ID > li").append($(this).text());
        $("#inner_time_menu_ID > ul").addClass("none");
        clicks=0;
    });

    //if we are clicking out of list, it will hide itself
    $(document).click(function(e){
        if (clicks==1){
            $("#inner_time_menu_ID > ul").addClass("none");
            clicks=0;
        }
    })

//--------------inner_time_menu-----------------------
});