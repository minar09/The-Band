$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
      // Most important owl features
        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        singleItem : true,
        itemsScaleUp : false,
      
        autoPlay: true,
        navigation: true,

  });
 
});