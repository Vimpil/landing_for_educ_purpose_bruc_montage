/**
 * Created by Soloni on 20.05.2016.
 */
$(document).ready(function(){

    var clicks=0;
    var supe;
    var price;

    $("#price_signboard").on("click",function(e) {

        if(clicks==0){
            $(".price_list").removeClass("none");
            clicks=1;
            e.stopPropagation(e);
        }
        else {
            $(".price_list").addClass("none");
        }
    });

    var allOptions = $(".price_list").children('li:not(.init)');
    $(".price_list>li").on("click", function(e) {

        supe=$(this).attr("value").substring(0,($(this).attr("value")).indexOf('#'));
        price=$(this).attr("value").substring(($(this).attr("value")).indexOf('#')+1, $(this).attr("value").length);
        $(".supe").empty();
        $(".supe").append(supe);
        $(".price").empty();
        $(".price").append(price);
        $(".price_list").addClass("none");
        clicks=0;
        e.stopPropagation(e);
    });

    $(document).click(function(e){
        if (clicks==1){
            $(".price_list").addClass("none");
            clicks=0;
        }
    })

});