registerSketch('sk3', function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(220);

    const x = p.width / 2;
    const y = p.height / 2;

    let hr = p.hour();
    let min = p.minute();
    let sec = p.second();

    let angle = p.map(sec, 0, 60, -p.HALF_PI, p.TWO_PI - p.HALF_PI);

    // outer progress ring
    p.noStroke();
    p.fill(0, 120, 255);
    p.arc(x, y, 200, 200, -p.HALF_PI, angle, p.PIE);

    // hollow center
    p.fill(220);
    p.circle(x, y, 150);

    // ring outlines
    p.noFill();
    p.stroke(0);
    p.strokeWeight(2);
    p.circle(x, y, 200);
    p.circle(x, y, 150);

    // time label with seconds
    p.noStroke();
    p.fill(0);
    p.textAlign(p.CENTER, p.CENTER);

    p.textSize(24);
    p.text(
      p.nf(hr, 2) + ":" + p.nf(min, 2) + ":" + p.nf(sec, 2),
      x,
      y - 10
    );

    p.textSize(16);
    p.text("seconds", x, y + 22);
  };

});