registerSketch('sk4', function(p) {

  p.setup = function() {
    const canvas = p.createCanvas(800, 800);
    canvas.parent('sketch-container-sk4');
    p.textFont('sans-serif');
  };

  p.draw = function() {
    p.background(250);

    // chart area
    const chartX = 120;
    const chartY = 150;
    const chartW = 520;
    const chartH = 400;

    const sec = p.second();
    const min = p.minute();

    const rowCount = 12;
    const currentRow = min % rowCount;
    const rowH = chartH / rowCount;

    const barW = p.map(sec, 0, 59, 0, chartW);
    const barY = chartY + currentRow * rowH + rowH * 0.2;
    const barHeight = rowH * 0.6;

    // axes
    p.stroke(0);
    p.strokeWeight(1);
    p.line(chartX, chartY, chartX, chartY + chartH);
    p.line(chartX, chartY + chartH, chartX + chartW, chartY + chartH);

    // x axis ticks
    p.textSize(12);
    p.fill(40);

    for (let i = 0; i <= 60; i += 10) {
      const tickX = chartX + p.map(i, 0, 60, 0, chartW);
      p.stroke(0);
      p.line(tickX, chartY + chartH, tickX, chartY + chartH + 5);

      p.noStroke();
      p.textAlign(p.CENTER, p.TOP);
      p.text(i, tickX, chartY + chartH + 8);
    }

// y axis tick labels (0 at bottom, increasing upward)
p.textSize(12);
p.fill(40);
p.textAlign(p.RIGHT, p.CENTER);

for (let r = 0; r < rowCount; r++) {
  const y = chartY + chartH - (r * rowH) - rowH / 2;
  p.text(r, chartX - 10, y);
}

    // axis labels
    p.textSize(14);
    p.textAlign(p.CENTER);
    p.text("Seconds (0–60)", chartX + chartW / 2, chartY + chartH + 40);

    p.push();
    p.translate(chartX - 60, chartY + chartH / 2);
    p.rotate(-p.HALF_PI);
    p.text("Minute Rows", 0, 0);
    p.pop();

    // bar colors
    let colors = [
      p.color(220, 90, 90),
      p.color(90, 160, 220),
      p.color(120, 200, 120),
      p.color(240, 180, 80),
      p.color(170, 120, 220),
      p.color(80, 190, 180)
    ];

    p.noStroke();
    p.fill(colors[currentRow % colors.length]);
    p.rect(chartX, barY, barW, barHeight);

    // titles
    p.fill(30);
    p.textAlign(p.LEFT);
    p.textSize(20);
    p.text("Horizontal Bar Timer", chartX, 80);

    p.textSize(14);
    p.text("Minute row: " + min, chartX, 110);
    p.text("Seconds: " + sec, chartX + 160, 110);
  };

});