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

$('#bottomClick').click(function(event){
    // alert('hello world');
    $('#main-message').text($('.bottombox').data('message'));
    $('#top-message').css("display","flex");
    $('#bottom-message').css("transition","opacity 1s");
    $('#bottom-message').css("display","none");
    $('.process-flex-container').css("display","none");
    $('.people-flex-container').css("display","block");

});

$('#topClick').click(function(event){
    // alert('hello world');
    $('#main-message').text($('.topbox').data('message'));
    $('#top-message').css("display","none");
    $('#bottom-message').css("display","flex");
    $('.people-flex-container').css("display","none");
    $('.process-flex-container').css("display","flex");
});

var slideDesignIndex = 1;
showDivsDesign(slideDesignIndex);

function plusDivsDesign(n) {
  showDivsDesign(slideDesignIndex += n);
}

function showDivsDesign(n) {
  var i;
  var x = document.getElementsByClassName("design-slides");
  if (n > x.length) {slideDesignIndex = 1} 
  if (n < 1) {slideDesignIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideDesignIndex-1].style.display = "grid"; 
}

var slideManageIndex = 1;
showDivsManagement(slideManageIndex);

function plusDivsManagement(n) {
  showDivsManagement(slideManageIndex += n);
}

function showDivsManagement(n) {
  var i;
  var x = document.getElementsByClassName("management-slides");
  if (n > x.length) {slideManageIndex = 1} 
  if (n < 1) {slideManageIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideManageIndex-1].style.display = "grid"; 
}

