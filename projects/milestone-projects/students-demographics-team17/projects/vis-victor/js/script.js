$(function () {
    // Color undifined fix
    Highcharts.setOptions({
        drilldown: {
            activeDataLabelStyle: {
                // Fixes Uncaught TypeError: Cannot read property 'color' of undefined
                color: "#003399"
            }
        },
        lang: {
            drillUpText: '◄ to pie chart'
        }
    });

    // Create the chart
    Highcharts.chart('main-container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'How long has the users been with their current ISP provider?'
        },
        subtitle: {
            text: 'Below data shows that how long has the users been using there internet service provider for.'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Number of users'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Years',
            colorByPoint: true,
            data: [{
                name: '0 - 2 years',
                y: 25,
            }, {
                name: '3 - 5 years',
                y: 50,
            }, {
                name: '6 - 8 years',
                y: 12.50,
            }, {
                name: '9+ years',
                y: 12.50,

            }]
        }],
    });

















});