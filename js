$(document).ready(function () {
    $('.menu-icon').on('click', function () {
        $('.sidebar').toggleClass('collapsed');
        $('.main-content').toggleClass('expanded');
    });

    
    $('.dropdown').on('click', function () {
        $(this).toggleClass('active');
    });

    
    initCharts();
});

function initCharts() {
    
    const barCtx = document.getElementById('myBarChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Accounts Payable',
                    data: [1200, 1900, 3000, 5000, 2200, 3000],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                },
                {
                    label: 'Accounts Receivable',
                    data: [1500, 2300, 1800, 4000, 2800, 2600],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

   
    const pieCtx1 = document.getElementById('myPieChart1').getContext('2d');
    new Chart(pieCtx1, {
        type: 'pie',
        data: {
            labels: ['Used', 'Remaining'],
            datasets: [{
                data: [65, 35],
                backgroundColor: ['#1ABC9C', '#F1F1F1'],
            }]
        },
        options: {
            responsive: true
        }
    });

    
    const pieCtx2 = document.getElementById('myPieChart2').getContext('2d');
    new Chart(pieCtx2, {
        type: 'pie',
        data: {
            labels: ['Used', 'Remaining'],
            datasets: [{
                data: [75, 25],
                backgroundColor: ['#E74C3C', '#F1F1F1'],
            }]
        },
        options: {
            responsive: true
        }
    });
}
