registerSketch('sk2', function(p) {

  p.setup = function () {
    p.createCanvas(600, 600);
  };
  
  var data = [{
    type: 'bar',
    x: [15, 30, 45, 60],
    y: [1, 2, 3, 4],
    orientation: 'h',
  
    marker: {
      color: [
        'rgba(100, 180, 200, 0.5)',
        'rgba(200, 180, 100, 0.5)',
        'rgba(100, 200, 180, 0.5)',
        'rgba(0, 0, 0, 1)'
      ]
    }
  }];
  
  var layout = {
    title: {
      text: "Hours and Minutes Stacked Chart",
      font: { size: 24 }
    },
  
    xaxis: {
      title: {
        text: "minutes",
        font: { size: 18 }
      }
    },
  
    yaxis: {
      title: {
        text: "hours",
        font: { size: 18 }
      }
    }
  };
  
  p.draw = function() {
    Plotly.newPlot('myDiv', data, layout);
  };
  
  });