 $(document).ready(function() {
 var speed = 200;

     //timers
            $('#timer').timer({
                duration: '3s',
                callback: function () {
                    $(".tab-next").trigger("click");
                },
                repeat: true //repeatedly calls the callback you specify
            });

         $('#timer2').timer({
             duration: '3s',
             callback: function () {
                 $("div.main-right-slide.main-articles div.main-articles-buttons div.art-right").trigger("click");
             },
             repeat: true //repeatedly calls the callback you specify
         });

         $('#timer3').timer({
             duration: '3s',
             callback: function () {
                 $("div.main-right-slide.main-works div.main-articles-buttons div.art-right").trigger("click");
             },
             repeat: true //repeatedly calls the callback you specify
         });


//First button

     $(".tab-prev").click(function() {
        var now = $(".tab-slider ul.slides").children(':visible'),
            last = $(".tab-slider ul.slides").children('li:last-of-type'),
            prev = now.prev();
        prev = prev.index() == -1 ? last : prev;
        now.fadeOut(speed, function() {prev.fadeIn(speed);});
    });

    $(".tab-next").click(function() {
        var now = $(".tab-slider ul.slides").children(':visible'),
            first = $(".tab-slider ul.slides").children(':first'),
            next = now.next();
        if(next.is("div")){
            next=first;
        }
        now.fadeOut(next, function() {now.fadeIn(speed);});
    });


/*
     var duration = 20; // duration in seconds
     var fadeAmount = 0.3; // fade duration amount relative to the time the image is visible
     var durationMs = duration * 1000;
     var imageTime = durationMs / numImages; // time the image is visible
     var fadeTime = imageTime * fadeAmount; // time for cross fading
     var visibleTime = imageTime  - (imageTime * fadeAmount * 2);// time the image is visible with opacity == 1
     var animDelay = visibleTime * (numImages - 1) + fadeTime * (numImages - 2); // animation delay/offset for a single image

        if(index != 0){
            $(element).css("opacity","0");
            setTimeout(function(){
                doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
            },visibleTime*index + fadeTime*(index-1));
            }else{
            setTimeout(function(){
            $(element).animate({opacity:0},fadeTime, function(){
                setTimeout(function(){
                    doAnimationLoop(element,fadeTime, visibleTime, fadeTime, animDelay);
                },animDelay )
            });
        },visibleTime);
     }

// creates a animation loop
     function doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime){
         fadeInOut(element,fadeInTime, visibleTime, fadeOutTime ,function(){
             setTimeout(function(){
                 doAnimationLoop(element, fadeInTime, visibleTime, fadeOutTime, pauseTime);
             },pauseTime);
         });
     }

// shorthand for in- and out-fading
     function fadeInOut( element, fadeIn, visible, fadeOut, onComplete){
         return $(element).animate( {opacity:1}, fadeIn ).delay( visible ).animate( {opacity:0}, fadeOut, onComplete);
     }

*/


//Second Button

	$("div.main-right-slide.main-articles div.main-articles-buttons div.art-left").click(function() {
        var now = $(".main-articles>ul.slides").children(':visible'),
            last = $(".main-articles>ul.slides").children('li:last-of-type'),
            prev = now.prev();
        prev = prev.index() == -1 ? last : prev;
        now.fadeOut(speed, function() {prev.fadeIn(speed);});
    });

    $("div.main-right-slide.main-articles div.main-articles-buttons div.art-right").click(function() {
        var now = $(".main-articles>ul.slides").children(':visible'),
            first = $(".main-articles>ul.slides").children(':first'),
            next = now.next();
        if(next.is("div")){
            next=first;
        }
        now.fadeOut(speed, function() {next.fadeIn(speed);});
    });


//Third Button

     $("div.main-right-slide.main-works div.main-articles-buttons div.art-left").click(function() {
         var now = $("div.col-xs-12 div.main-right-slide.main-works ul.slides").children(':visible'),
             last = $("div.col-xs-12 div.main-right-slide.main-works ul.slides").children('li:last-of-type'),
             prev = now.prev();
         prev = prev.index() == -1 ? last : prev;
         now.fadeOut(speed, function() {prev.fadeIn(speed);});
     });

     $("div.main-right-slide.main-works div.main-articles-buttons div.art-right").click(function() {
         var now = $("div.col-xs-12 div.main-right-slide.main-works ul.slides").children(':visible'),
             first = $("div.col-xs-12 div.main-right-slide.main-works ul.slides").children(':first'),
             next = now.next();
         if(next.is("div")){
             next=first;
         }
         now.fadeOut(speed, function() {next.fadeIn(speed);});
     });
   });