registerSketch('sk4', function(p) {

  p.setup = function () {
    p.createCanvas(700, 500);
    p.textFont('sans-serif');
  };

  p.draw = function() {
    p.background(245);

    let min = p.minute();
    let sec = p.second();

    let chartX = 150;
    let chartY = 420;
    let maxW = 420;
    let rowGap = 28;

    // keep rows visible by showing minute position within the hour
    let minuteRow = min;

    // title
    p.noStroke();
    p.fill(40);
    p.textSize(24);
    p.text("Minutes vs Seconds", 230, 55);

    p.textSize(18);
    p.text(`Minute: ${min}   Second: ${sec}`, 230, 90);

    // axes
    p.stroke(80);
    p.line(chartX, chartY, chartX + maxW, chartY);
    p.line(chartX, chartY, chartX, chartY - 360);

    // x-axis ticks every 5 seconds
    p.textSize(12);
    for (let i = 0; i <= 60; i += 5) {
      let x = p.map(i, 0, 60, chartX, chartX + maxW);
      p.stroke(80);
      p.line(x, chartY, x, chartY + 6);
      p.noStroke();
      p.fill(40);
      p.text(i, x - 6, chartY + 20);
    }

    // y-axis labels for minutes
    for (let i = 0; i <= 12; i++) {
      let y = chartY - rowGap * i;
      p.noStroke();
      p.fill(40);
      p.text(i, chartX - 25, y + 5);
    }

    p.textSize(16);
    p.text("seconds", chartX + maxW + 10, chartY + 5);
    p.text("minutes", chartX - 60, chartY - 370);

    // current bar: grows with seconds, jumps up each minute
    let barW = p.map(sec, 0, 60, 0, maxW);
    let barY = chartY - rowGap * minuteRow;

    p.noStroke();
    p.fill(100, 180, 200);
    p.rect(chartX, barY - 16, barW, 20, 4);
  };

});