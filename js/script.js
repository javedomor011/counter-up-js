// javaScript //


// jQurey //
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$diy = $('.number-diy .data');
$diy.rollNumber({
  number: $diy[0].dataset.number, 
  speed: 500, 
  interval: 200,
  rooms: 7,
  space: 110,
  symbol: ',', 
  fontStyle: {
    'font-size': 102,
    'font-family': 'Roboto',
    'gap': 10
  }
})

$( document ).ready(function() {
    $('.timer').countimer({
        autoStart : false
        });
});

$(document).ready(function(){
  var element = $('#countdown-gampang');
  var finish_d = new Date();
finish_d.setDate(finish_d.getDate() + 50);
  element.CountdownGampang({
      rampung: finish_d,
      theme: "flat-colors-very-wide"
  }, function(){
      // callback that is fired when the countdown reaches 0.
      alert("Wes Wayahe Bro :)");
  });
});

