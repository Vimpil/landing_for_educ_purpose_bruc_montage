jQuery(document).ready(function () {

  var p =$(".menu-row ol");
  var offset= p.offset();
  var amountScrolled = offset.top;

  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled){
      $('.fix-menu.none').removeClass('none');
      $('#project-line-main').addClass('none');
      clicks_mid=0;
  }else{
      $('div.fluid-container.items-row').addClass('none');
      $('.fix-menu').addClass('none');
      clicks=0;
  }
  })

  var clicks = 0;

  $( "div.button-menu" ).click(function() {
    if (clicks==0){
      $('div.fluid-container.items-row').removeClass('none');
      clicks=1;
    } else {
      $('div.fluid-container.items-row').addClass('none');
      clicks=0;
    }
  });

  $( "body > div.fix-menu > div.fluid-container.menu-row > div > div > div > div.fix-menu-right > a" ).click(function() {

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
  })