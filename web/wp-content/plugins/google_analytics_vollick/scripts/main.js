(function($){
  $(document).ready(function(){
    console.log('doc is ready');

    $('h1').on('click', function () { 
      console.log('fire google analytic event');
    });


  });
})(jQuery);
