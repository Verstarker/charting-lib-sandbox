Highcharts.chart('jay-container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Preferred Front end development languages by Age'
    },
    subtitle: {
        text: 'Source: Interview run by Jay Abey'
    },
    xAxis: {
        categories: ['18-21', '22-25', '26-30', '30+'],
        colors:['#000000', '#000000', '#ff0000', '#000000'],
        title: {
            text: 'Age group'
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Students',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Number of students',
        data: [2, 1, 4, 1],
        color: 'rgb(0,0,255,1)'
    }, {
        name: 'CSS',
        data: [1, 0, 0, 1],
        color: 'rgba(255,128,0,0.3)'
    }, {
        name: 'Javascript',
        data: [0, 1, 1, 0],
        color: 'rgba(255,128,0,0.6)'
    }, {
        name: 'JQuery',
        data: [1, 0, 3, 0],
        color: 'rgba(255,128,0,1)'
    }]
});