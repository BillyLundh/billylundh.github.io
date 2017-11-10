

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
                /*var $this = $(this),
                    size = $this.hasClass('large') ?
                      { width: 290, height: 290 } :
                      { width: 590, height: 590 };
                $this.toggleClass('large').animate( size, reMasonry );
                $grid.masonry();*/
                console.log("hey");
              });
            });

    