
Highcharts.chart('container', {
    title: {
        text: 'Combination chart'
    },
    xAxis: {
        categories: ['No of Students', 'Passion over money', 'Average age', 'Further study', 'Confident scale']
    },
    labels: {
        items: [{
            html: 'Total fruit consumption',
            style: {
                left: '50px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        }]
    },
    series: [{
        type: 'column',
        name: 'Student with Non-IT background',
        data: [2, 2, 26, 1, 6]
    }, {
        type: 'column',
        name: 'Student with IT or No background',
        data: [6, 5, 22, 2, 7]
    }, {
        type: 'spline',
        name: 'Average',
        data: [3, 2.67, 3, 6.33, 3.33],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'Student with Non-IT background',
            y: 13,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'Student with IT background',
            y: 23,
            color: Highcharts.getOptions().colors[1] // John's color
        }],
        center: [2100, -80],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
});

