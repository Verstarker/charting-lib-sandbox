

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Adobe", "UXpin", "Microsoft", "Other"],
        datasets: [{
            label: '17CDUX07 Design preferance',
            data: [5, 3, 0, 1 ],
            backgroundColor: [
                'rgba(255, 25, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)'        
            ],

            borderColor: [
                'rgba(255,25,0,1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ],

            borderWidth: 1
        }]
    },
    options: {
        display: {
            legend: false,
        },
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    min:0,
                    max:8,
                }
            }]
        }
    }
});