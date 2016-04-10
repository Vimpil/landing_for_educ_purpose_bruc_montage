jQuery(document).ready(function () {

  var p =$("div.fluid-container.menu-row div.container div.row div.col-xs-12 ol");
  var offset= p.offset();
  var amountScrolled = offset.top;
  console.log(amountScrolled, "Hello, world!");
  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled){
      $('.fix-menu.none').removeClass('none');
  }else{
        $('.fix-menu').addClass('none');
  }
  })
})