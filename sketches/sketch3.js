registerSketch('sk3', function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(220);

    const x = p.width / 2;
    const y = p.height / 2;

    // outer ring
    p.noFill();
    p.stroke(0);
    p.strokeWeight(2);
    p.circle(x, y, 200);

    // inner ring
    p.circle(x, y, 150);

    // blue progress section
    p.noStroke();
    p.fill(0, 120, 255);
    p.arc(x, y, 200, 200, -p.HALF_PI, -p.HALF_PI + p.PI / 3, p.PIE);

    // cut out the middle so it stays hollow
    p.fill(220);
    p.circle(x, y, 150);

    // redraw outlines on top
    p.noFill();
    p.stroke(0);
    p.strokeWeight(2);
    p.circle(x, y, 200);
    p.circle(x, y, 150);
  };

});