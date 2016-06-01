/**
 * Created by Vimpil1 on 19.04.2016.
 */
jQuery(document).ready(function () {

//--------------down_float_menu-----------------------

    var p =$("div.col-xs-12 ol");
    //counting screen length to menu from the top
    var offset= p.offset();
    var amountScrolled = offset.top;
    //when scrolled amount bigger than position of row menu - float_menu become visible
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled){
            $('.right-menu.none').removeClass('none');
        }else{
            $('.right-menu').addClass('none');
        }
    })

//--------------down_float_menu-----------------------

})