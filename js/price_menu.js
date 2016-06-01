/**
 * Created by Soloni on 20.05.2016.
 */
$(document).ready(function(){

//--------------down_float_menu(project-line-main)-----------------------

//clicks count
    var clicks=0;
//variable for *last price*
    var supe;
//variable for *today price*
    var price;

//Opening and hiding on click price list

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

// Reacting on ul list li clicks; taking the value from the li; value have two parts - first, *last price* and *today price* - this two values separated by "#" symbol; method takes first and second price and assigns it to the element

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

// On outside ONclick reaction - hiding our tab on click

    $(document).click(function(e){
        if (clicks==1){
            $(".price_list").addClass("none");
            clicks=0;
        }
    })

//--------------down_float_menu(project-line-main)-----------------------

});