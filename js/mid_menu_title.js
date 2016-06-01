/**
 * Created by Soloni on 20.05.2016.
 */
$(document).ready(function() {

//--------------down_float_menu(project-line-main)-----------------------

// Hiding and unhiding the projects tab in menu
    var clicks_mid = 0;

    $("#project-button").click(function(e)   {
        if(clicks_mid==0) {
            $("#project-line-main").removeClass("none");
            clicks_mid = 1;
            e.stopPropagation(e);
        } else {
            $("#project-line-main").addClass("none");
            clicks_mid=0;
            e.stopPropagation(e);
        }
    })

// On outside ONclick reaction - hiding our tab on click

    $(document).click(function(e){
        if (clicks_mid==1){
            $("#project-line-main").addClass("none");
            clicks_mid=0;
        }
    })

//--------------down_float_menu(project-line-main)-----------------------

});