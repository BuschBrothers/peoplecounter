
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
      var $width = "200px";
      document.getElementById("mySidenav").style.width = $width;
      document.getElementById("main").style.marginLeft = $width;
      hide($("#mySidenav"));
    }
  });

});

function hide($side_bar) {
  $side_bar.find('h5').toggleClass("hide");
  $side_bar.find('.profile').toggleClass("hide");
  var $listItems = $side_bar.find('a');  // en vez de encontrar "a", debe tomar los hijos
  for (var i = 0; i < $listItems.length; i++) {
      $($listItems[i]).toggleClass("hide");
  }
};

var $my_chart = $("#lineChart");
var myLineChart = new Chart($my_chart, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'first dataset',
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,
          data: [65,59,80,81,56,55,40],
        }
      ]
    }
});
