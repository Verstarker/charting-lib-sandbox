Highcharts.chart('container-chart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Which Areas Of<br>Christchurch<br>Do We Live In?<br>By Percentage',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Percentage of People',
        innerSize: '50%',
        data: [
            ['North',   2],
            ['South',       2],
            ['West', 3],
            ['Central',    1],
            ['Other',     1],
            {
               
            }
        ]
    }]
});

