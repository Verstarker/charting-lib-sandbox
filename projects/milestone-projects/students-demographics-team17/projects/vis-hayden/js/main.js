var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Spark', 'Vodafone', '2Degrees', 'Slingshot', 'Other'],
                datasets: [{
                    label: 'Data',
                    data: [3, 3, 2, 0, 0],
                    borderColor: 'rgba(255, 0, 0, 0.6)',
                    backgroundColor: ['rgba(255, 99, 82, 0.5)',
                                    'rgba(54, 162, 235, 0.5)',
                                    'rgba(255, 206, 86, 0.5)',
                                    'rgba(75, 192, 192, 0.5)',
                                    'rgba(153, 102, 255, 0.5)',],
                }],
            },
            options: {
                title: {
                    text: 'Amount of people with Different ISPs',
                    display: true
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'I.S.Ps (Internet Service Providers)'
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of people using these ISPs'
                        }
                    }]
                }
            }
        });