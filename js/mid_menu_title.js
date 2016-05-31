/**
 * Created by Soloni on 20.05.2016.
 */
$(document).ready(function() {
    /* This is basic - uses default settings */

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
    $(document).click(function(e){
        if (clicks_mid==1){
            $("#project-line-main").addClass("none");
            clicks_mid=0;
        }
    })
});