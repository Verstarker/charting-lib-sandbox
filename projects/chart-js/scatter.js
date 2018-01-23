 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Temperature', 'Sales'],
          [ 11.9, 185],
          [ 14.2, 215],
          [ 18.2, 332],
          [ 16.4, 325],
          [ 17.2, 408],
          [ 18.1, 421],
          [ 18.5, 406],
          [ 19.4, 412],
          [ 22.1, 522],
          [ 22.6, 445],
          [ 25.1, 614]
        ]);

        var options = {
          title: 'Temperature vs. Sales comparison',
          hAxis: {title: 'Temperature', minValue: 0, maxValue: 30, format:'#,##°'},
          vAxis: {title: 'Sales', minValue: 0, maxValue: 650, format:'$###'},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }