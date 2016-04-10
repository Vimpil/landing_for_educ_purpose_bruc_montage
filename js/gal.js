 $(document).ready(function() {
 var speed = 200;

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




     $(".tab-prev").click(function() {
        var now = $(".tab-slider ul.slides").children(':visible'),
            last = $(".tab-slider ul.slides").children('li:last-of-type'),
            prev = now.prev();
        prev = prev.index() == -1 ? last : prev;
        now.fadeOut(speed, function() {prev.fadeIn(speed);});
        $('#timer').timer("remove");
    });

    $(".tab-next").click(function() {
        var now = $(".tab-slider ul.slides").children(':visible'),
            first = $(".tab-slider ul.slides").children(':first'),
            next = now.next();
        if(next.is("div")){
            next=first;
        }
        now.fadeOut(speed,easing("easeInBounce"), function() {next.fadeIn(speed);});
        $('#timer').timer("remove");
    });



	$("div.main-right-slide.main-articles div.main-articles-buttons div.art-left").click(function() {
        var now = $(".main-articles>ul.slides").children(':visible'),
            last = $(".main-articles>ul.slides").children('li:last-of-type'),
            prev = now.prev();
        prev = prev.index() == -1 ? last : prev;
        now.fadeOut(speed, function() {prev.fadeIn(speed);});
        $('#timer2').timer("remove");
    });

    $("div.main-right-slide.main-articles div.main-articles-buttons div.art-right").click(function() {
        var now = $(".main-articles>ul.slides").children(':visible'),
            first = $(".main-articles>ul.slides").children(':first'),
            next = now.next();
        if(next.is("div")){
            next=first;
        }
        now.fadeOut(speed, function() {next.fadeIn(speed);});
        $('#timer2').timer("remove");
    });


     $("div.main-right-slide.main-works div.main-articles-buttons div.art-left").click(function() {
         var now = $("div.col-xs-12 div.main-right-slide.main-works ul.slides").children(':visible'),
             last = $("div.col-xs-12 div.main-right-slide.main-works ul.slides").children('li:last-of-type'),
             prev = now.prev();
         prev = prev.index() == -1 ? last : prev;
         now.fadeOut(speed, function() {prev.fadeIn(speed);});
         $('#timer3').timer("remove");
     });

     $("div.main-right-slide.main-works div.main-articles-buttons div.art-right").click(function() {
         var now = $("div.col-xs-12 div.main-right-slide.main-works ul.slides").children(':visible'),
             first = $("div.col-xs-12 div.main-right-slide.main-works ul.slides").children(':first'),
             next = now.next();
         if(next.is("div")){
             next=first;
         }
         now.fadeOut(speed, function() {next.fadeIn(speed);});
         $('#timer3').timer("remove");
     });
   });