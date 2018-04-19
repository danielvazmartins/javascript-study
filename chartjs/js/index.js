var dataJson = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: 'Bar Chart',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
} 

var barChartCanvas = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(barChartCanvas, {
    type: 'bar',
    data: dataJson,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var horizontalBarChartCanvas = document.getElementById("horizontalBarChart").getContext('2d');
var horizontalBarChart = new Chart(horizontalBarChartCanvas, {
    type: 'horizontalBar',
    data: dataJson,
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
horizontalBarChart.data.datasets[0].label = 'Horizontal Bar Chart';
horizontalBarChart.update();

var lineChartCanvas = document.getElementById("lineChart").getContext('2d');
var lineChart = new Chart(lineChartCanvas, {
    type: 'line',
    data: dataJson,
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
lineChart.data.datasets[0].label = 'Line Chart';
lineChart.update();