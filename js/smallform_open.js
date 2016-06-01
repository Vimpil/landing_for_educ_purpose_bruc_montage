/**
 * Created by Soloni on 10.05.2016.
 */
jQuery(document).ready(function () {

//--------------back-call-block-----------------------
//hide and show call_block on click
    var clicks = 0;

    $("#open-header-form").click(function(){

        if (clicks==0){
            $('#header-form').removeClass('none');
            clicks=1;
            $(this).toggleClass('active');
        } else {
            $('#header-form').addClass('none');
            clicks=0;
            $(this).toggleClass('active');
        }

        return false;

    });

//--------------back-call-block-----------------------

})