registerSketch('sk4', function(p) {

  p.setup = function () {
    p.createCanvas(700, 500);
    p.textFont('sans-serif');
  };

  p.draw = function() {
    p.background(245);

    let min = p.minute();

    // map current minute to 4 bar lengths
    let values = [
      min / 4,
      min / 2,
      (min * 3) / 4,
      min
    ];

    let labels = [1, 2, 3, 4];
    let colors = [
      [100, 180, 200],
      [200, 180, 100],
      [100, 200, 180],
      [0, 0, 0]
    ];

    let chartX = 140;
    let chartY = 380;
    let barH = 45;
    let gap = 20;
    let maxW = 420;

    // title
    p.noStroke();
    p.fill(40);
    p.textSize(24);
    p.text("Hours and Minutes Stacked Chart", 170, 50);

    // axes
    p.stroke(80);
    p.line(chartX, chartY, chartX, chartY - 4 * (barH + gap) + gap);
    p.line(chartX, chartY, chartX + maxW, chartY);

    // x-axis labels stay the same
    p.noStroke();
    p.fill(40);
    p.textSize(16);
    p.text("15", chartX + maxW * 0.25 - 10, chartY + 25);
    p.text("30", chartX + maxW * 0.50 - 10, chartY + 25);
    p.text("45", chartX + maxW * 0.75 - 10, chartY + 25);
    p.text("60", chartX + maxW - 10, chartY + 25);

    // y-axis title
    p.text("hours", chartX - 55, chartY - 4 * (barH + gap) - 10);
    p.text("minutes", chartX + maxW + 10, chartY + 25);

    // draw bars
    for (let i = 0; i < 4; i++) {
      let y = chartY - (i + 1) * (barH + gap) + gap;
      let w = p.map(values[i], 0, 60, 0, maxW);

      p.noStroke();
      p.fill(colors[i][0], colors[i][1], colors[i][2]);
      p.rect(chartX, y, w, barH);

      // y labels stay the same
      p.fill(40);
      p.textSize(18);
      p.text(labels[i], chartX - 25, y + 28);
    }
  };

});