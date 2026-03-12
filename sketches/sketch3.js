registerSketch('sk3', function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(220);

    const x = p.width / 2;
    const y = p.height / 2;

    // Draw the blue progress arc
    p.noStroke();
    p.fill(0, 120, 255); // blue
    p.arc(x, y, 200, 200, -p.HALF_PI, -p.HALF_PI + p.PI / 3, p.PIE);

    // Cut out the center to make the ring hollow
    p.fill(220); // same as background
    p.circle(x, y, 150);

    // Draw the outlines of the ring
    p.noFill();
    p.stroke(0);
    p.strokeWeight(2);
    p.circle(x, y, 200);
    p.circle(x, y, 150);
  };

});