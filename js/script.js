/**
 * Created by Soloni on 01.06.2016.
 */

$(document).ready(function() {

//--------------inner_time_menu-----------------------

    //var with clicks count

    var clicks = 0;

    $("#inner_time_menu_ID > li").on("click", function (e) {
        if (clicks == 0) {
            $("#inner_time_menu_ID > ul").removeClass("none");
            clicks = 1;

            //stopping another functions that hides our menu
            e.stopPropagation();
        }
        else {
            $("#inner_time_menu_ID > ul").addClass("none");
        }
    });

    //choosing needed option
    $("#inner_time_menu_ID > ul > li").on("click", function () {
        $("#inner_time_menu_ID > li").empty();
        $("#inner_time_menu_ID > li").append($(this).text());
        $("#inner_time_menu_ID > ul").addClass("none");
        clicks = 0;
    });

    //if we are clicking out of list, it will hide itself
    $(document).click(function (e) {
        if (clicks == 1) {
            $("#inner_time_menu_ID > ul").addClass("none");
            clicks = 0;
        }
    })

//--------------inner_time_menu-----------------------

//*

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

//--------------down_float_menu------------------------

//*

//--------------fancybox_options-----------------------

    $(".fancyboxGal").fancybox({
        wrapCSS: "elements_call",
        padding: 0,
        helpers: {
            overlay: {
                opacity: 0.1,
                css: {'background': 'rgba(90, 92, 94, 0.8)'}
            }
        }
    });

//--------------fancybox_options-------------------------

//*

//--------------flexslider_options-----------------------

    jQuery('.flexslider').flexslider({
        animation: "fade",
        start: function (slider) {
            flexslider = slider; //Initializing flexslider here.
        }
    });

    //Next and Prev buttons of galleries, function will look for the ID value of closest parent by the clicked button
    $(".tab-next").click(function(){
        $("#"+($(this).closest("[id]").attr("id"))+" a.flex-next").click();
    });

    $(".tab-prev").click(function(){
        $("#"+($(this).closest("[id]").attr("id"))+" a.flex-prev").click();
    });

    $( "div.art-right").click(function() {
        $("#"+($(this).closest("[id]").attr("id"))+" li.flex-nav-next a").click();
    });

    $( "div.art-left").click(function() {
        $("#"+($(this).closest("[id]").attr("id"))+" li.flex-nav-prev a").click();
    });

//--------------flexslider_options---------------------------------------

//*

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
        return false;
    })

// On outside ONclick reaction - hiding our tab on click

    $(document).click(function(e){
        if (clicks_mid==1){
            $("#project-line-main").addClass("none");
            clicks_mid=0;
        }
    })

//--------------down_float_menu(project-line-main)-----------------------

//*

//--------------price-menu-----------------------------------------------

//clicks count
    var price_clicks=0;
//variable for *last price*
    var supe;
//variable for *today price*
    var price;

//Opening and hiding on click price list

    $("#price_signboard").on("click",function(e) {

        if(price_clicks==0){
            $(".price_list").removeClass("none");
            price_clicks=1;
            e.stopPropagation(e);
        }
        else {
            $(".price_list").addClass("none");
        }
    });

// Reacting on ul list li clicks; taking the value from the li; value have two parts - first, *last price* and *today price* - this two values separated by "#" symbol; method takes first and second price and assigns it to the element

    $(".price_list>li").on("click", function(e) {

        $("#price_signboard").text($(this).text());
        console.log("1");
        console.log($("#price_signboard").text($(this).text()));
        supe=$(this).attr("price_val").substring(0,($(this).attr("price_val")).indexOf('#'));
        console.log("2");
        console.log($(this).attr("price_val").substring(0,($(this).attr("price_val")).indexOf('#')));
        price=$(this).attr("price_val").substring(($(this).attr("price_val")).indexOf('#')+1, $(this).attr("price_val").length)+" "+'<span class="rubl">a</span>';
        console.log("3");
        console.log($(this).attr("price_val").substring(($(this).attr("price_val")).indexOf('#')+1, $(this).attr("price_val").length));
        $(".supe").empty();
        $(".supe").append(supe);
        $(".price").empty();
        $(".price").append(price);
        $(".price_list").addClass("none");
        price_clicks=0;
        e.stopPropagation(e);
    });

// On outside ONclick reaction - hiding our tab on click

    $(document).click(function(e){
        if (price_clicks==1){
            $(".price_list").addClass("none");
            price_clicks=0;
        }
    })

//--------------price-menu------------------------------------

//*

//--------------project_animated_slider-----------------------

    //variable for img path
    var path;

    $(".gal_small_icons img").mouseover(function () {


        //cover over the the image, adding id to control the mouse leave fading
        $(this).parent().append('<div id="temporary_cover" class="cover"></div>');
        path=$(this);

        //fading effect on click, loading selected image
        $("#temporary_cover").click(function () {
            $(".main_gal_screen:first-child img").fadeOut(400, function() {
                $(".main_gal_screen:first-child img").attr("src", ""+(path.parent().attr("value"))).fadeIn(400);
            })
        })

        // On outside ONclick reaction - hiding our tab on click

        $("#temporary_cover").mouseleave(function () {
            $("#temporary_cover").remove();
        })

    })

//--------------project_animated_slider-----------------------

//*

//--------------back-call-block-------------------------------
//hide and show call_block on click
    var clicks_back_call = 0;

    $("#open-header-form").click(function(){

        if (clicks_back_call==0){
            $('#header-form').removeClass('none');
            clicks_back_call=1;
            $(this).toggleClass('active');
        } else {
            $('#header-form').addClass('none');
            clicks_back_call=0;
            $(this).toggleClass('active');
        }

        return false;

    });

//--------------back-call-block---------------------------

//*

//--------------upper_floating_menu-----------------------


    var p =$(".menu-row ol");

//counting screen length to menu from the top
    var project_line_1=0; //var for first menu click counts
    var project_line_2=0; //var for second menu click couns
    var offset= p.offset();
    var amountScrolled = offset.top;
    var upper_clicks = 0;

//when scrolled amount bigger than position of row menu - float_menu become visible

    $(window).scroll(function(e) {
        if ($(window).scrollTop() > amountScrolled) {

            $('.fix-menu').removeClass('none');
            $('div.fluid-container.items-row').addClass('none');

            // checking on second part of screen-scrolling and hiding menu
            if(project_line_1==1){
                $("div.fluid-container.project-row").addClass("none");
                project_line_1=0;
            }

        } else {

            $('.fix-menu').addClass('none');

            // checking on first part of screen-scrolling and hiding menu
            if(project_line_2==1){
                $("div.fluid-container.project-row").addClass("none");
                project_line_2=0;
            }
        }
    })

//show addit menu on click

    $("a#project-button").click(function () {
        if(project_line_1==0) {
            $("div.fluid-container.project-row").removeClass("none");
            project_line_1 = 1;
        }else {
            $("div.fluid-container.project-row").addClass("none");
            project_line_1 = 0;
        }
    })

    $("div.button-menu").click(function () {
            $('div.fluid-container.items-row').toggleClass('none');
    });

    $("#project-button-fix").click(function () {
        if(project_line_2==0) {
            $("div.fluid-container.project-row").removeClass("none");
            project_line_2 = 1;
        }else {
            $("div.fluid-container.project-row").addClass("none");
            project_line_2 = 0;
        }
        return false;
    })

//options for callback_popup fancybox

    $( "a.callback-popup" ).click(function() {

        $(".callback-popup").fancybox({
            "wrapCSS": "call",
            "padding": 0,
            helpers:{
                overlay: {
                    opacity: 0.1,
                    css: { 'background': 'rgba(90, 92, 94, 0.8)' }
                }
            }
        })
    })


//--------------upper_floating_menu-----------------------

})