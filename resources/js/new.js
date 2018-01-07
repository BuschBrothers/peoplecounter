
$(document).ready(function() {

  $open = $("#mySidenav").css("width");

  $("#menu").click(function() {
    var $current_width = $("#mySidenav").css("width");
    if ($current_width == $open) {
      var $width = "50px";
      document.getElementById("mySidenav").style.width = $width;
      document.getElementById("main").style.marginLeft = $width;
      hide($("#mySidenav"));
    } else {
      var $width = "150px";
      document.getElementById("mySidenav").style.width = $width;
      document.getElementById("main").style.marginLeft = $width;
      hide($("#mySidenav"));
    }
  });

});

function hide($side_bar) {
  var $listItems = $side_bar.find('a');
  for (var i = 0; i < $listItems.length; i++) {
    $($listItems[i]).toggleClass("hide");
  }
};
