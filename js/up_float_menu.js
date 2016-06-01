jQuery(document).ready(function () {

//--------------upper_floating_menu-----------------------


  var p =$(".menu-row ol");

//counting screen length to menu from the top

  var offset= p.offset();
  var amountScrolled = offset.top;

//when scrolled amount bigger than position of row menu - float_menu become visible

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

//show addit menu in click

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