/**
 * Created by Vimpil1 on 19.04.2016.
 */
jQuery(document).ready(function () {

    var p =$("div.col-xs-12 ol");
    var offset= p.offset();
    var amountScrolled = offset.top;
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled){
            $('.right-menu.none').removeClass('none');
        }else{
            $('.right-menu').addClass('none');
        }
    })
})