

var flkty = new Flickity( '.main-carousel', {
  // options
  cellAlign: 'left',
  contain: true
});



$(function(){

              var $container = $('masonry');

              var reMasonry = function() {
                $container.masonry();
              };

             $('.item').click(function(){
                console.log("hey");
              });
            });

    