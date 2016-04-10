jQuery("document").ready(function($){

    $("button").click(function(){
        var s = $("#example").scrollTop();
        $("span").text("scrollTop = " + s)
    });


});