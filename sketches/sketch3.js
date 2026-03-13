registerSketch('sk3', function(p) {
  let startMillis;

  p.setup = function() {
    const canvas = p.createCanvas(800, 800);
    canvas.parent('sketch-container-sk3');
    startMillis = p.millis();
    p.textAlign(p.CENTER, p.CENTER);
  };

  p.draw = function() {
    p.background(245);

    const x = p.width / 2;
    const y = p.height / 2 - 60;

    // elapsed time since page opened
    const elapsedMs = p.millis() - startMillis;
    const elapsedSeconds = elapsedMs / 1000;
    const elapsedMinutes = elapsedSeconds / 60;

    // progress through current minute
    const secProgress = elapsedSeconds % 60;
    const angle = p.map(secProgress, 0, 60, -p.HALF_PI, p.TWO_PI - p.HALF_PI);

    // outer / inner ring outlines
    p.noFill();
    p.stroke(0);
    p.strokeWeight(2);
    p.circle(x, y, 220);
    p.circle(x, y, 160);

    // blue progress arc
    p.noStroke();
    p.fill(70, 130, 220);
    p.arc(x, y, 220, 220, -p.HALF_PI, angle, p.PIE);

    // cut out the center
    p.fill(245);
    p.circle(x, y, 160);

    // redraw outlines on top
    p.noFill();
    p.stroke(0);
    p.strokeWeight(2);
    p.circle(x, y, 220);
    p.circle(x, y, 160);

    // title
    p.noStroke();
    p.fill(30);
    p.textSize(20);
    p.text("Ring Timer", x, y + 190);

    // elapsed time label
    p.textSize(16);
    p.text("Minutes elapsed: " + elapsedMinutes.toFixed(1), x, y + 225);
  };
});