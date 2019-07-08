/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

$('.flex-container').scroll(function(event) {
  console.log($('#scroll-checker').offset());
   if ($('#scroll-checker').offset().top <= 250) {
    $('#year').text($('.item-3').data('message'));
  } 
  
  else if($('#scroll-checker').offset().top <= 750){
    $('#year').text($('.item-2').data('message'));
  }
  
  else {
    $('#year').text('2019');
  }
});
