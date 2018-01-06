
$(document).ready(function() {
  // $(".carousel").slick({
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   swipe: false,
  //   dots: true,
  //   infinite: true
  // });

  var $scrollx = 0;
  $(window).scroll(function() {
    var $scrolly = $(this).scrollTop();
    if ($scrolly - $scrollx > 100) {
      var $scrollz = $('nav').css('height');
      $('nav').animate({top: '-' + $scrollz}, 150);
      $scrollx = $scrolly;
    } else if ($scrollx - $scrolly > 100) {
      $('nav').animate({top: '0px'}, 150);
      $scrollx = $scrolly;
    }
    // console.log($scrollx, $scrolly, $scrollz);
  });
  $('#login').click(function(){
    console.log('banana');
    document.location.href = './pages/new.html';
  });

  // cambio de color de la hoja plan light

  $('#light').hover(function() {
    var $old_color = $('#light-icon').css('color');
    console.log($old_color);
    var $new_color = [
                      'coral',
                      'lightBlue',
                      $old_color
                      ];
    var $index = 0;
    $('#light-icon').css('color', $new_color[1]);
    setInterval(function(){
      $('#light-icon').css('color', $new_color[$index]);
      $index++;

    }, 1000);
  }, function() {
    // la dejo por si se quiere agregar un efecto de salida
  });

  $('#pro').hover(function() {
    var $old_color = $('#pro-icon').css('color');
    console.log($old_color);
    var $new_color = [
                      'Crimson ',
                      'GoldenRod',
                      $old_color
                      ];
    var $index = 0;
    $('#pro-icon').css('color', $new_color[1]);
    setInterval(function(){
      $('#pro-icon').css('color', $new_color[$index]);
      $index++;

    }, 1000);
  }, function() {
    // la dejo por si se quiere agregar un efecto de salida
  });

});
