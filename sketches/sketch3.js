registerSketch('sk3', function(p) {

  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(220);

    const x = p.width / 2;
    const y = p.height / 2;

    // Outer ring outline
    p.noFill();
    p.stroke(0);
    p.strokeWeight(2);
    p.circle(x, y, 200);

    // Inner ring outline
    p.circle(x, y, 150);
  };

});