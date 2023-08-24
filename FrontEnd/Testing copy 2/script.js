document.addEventListener('DOMContentLoaded', function() {
  const stockData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Stock Price',
      data: [200, 300, 450, 500, 550, 400],
      backgroundColor: 'rgb(87, 69, 154)',
      borderColor: 'rgb(87, 69, 154)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(87, 69, 154)',
      pointRadius: 5,
      pointBorderWidth: 5,
      tension: 0.4,
    }]
  };

  // Create the chart
  const ctx = document.getElementById('stockChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: stockData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
          ticks: {
            font: {
              family: 'Arial',
              size: 12,
              weight: 'bold',
            },
            color: 'rgba(0, 0, 0, 0.5)',
          },
        },
        x: {
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
          },
          ticks: {
            font: {
              family: 'Arial',
              size: 12,
              weight: 'bold',
            },
            color: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
});
