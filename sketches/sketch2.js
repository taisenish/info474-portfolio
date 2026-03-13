const sketch2 = (p) => {
  p.setup = function () {
    p.createCanvas(800, 800);
    p.angleMode(p.DEGREES);
  };

  p.draw = function () {
    p.background(245, 240, 235);

    let cx = p.width / 2;
    let cy = p.height / 2 - 80;

    drawBaseFlower(cx, cy);
  };

  function drawBaseFlower(x, y) {
    // stem
    p.stroke(70, 140, 90);
    p.strokeWeight(8);
    p.line(x, y + 40, x, y + 220);

    // leaves
    p.noStroke();
    p.fill(90, 170, 110);
    p.ellipse(x - 35, y + 140, 50, 25);
    p.ellipse(x + 35, y + 175, 50, 25);

    // petals
    p.push();
    p.translate(x, y);

    for (let i = 0; i < 4; i++) {
      p.rotate(90);
      p.fill(160, 190, 235);
      p.stroke(120, 150, 210);
      p.strokeWeight(2);
      drawPetal();
    }

    p.pop();

    // center
    p.fill(245, 210, 60);
    p.stroke(200, 170, 40);
    p.strokeWeight(2);
    p.circle(x, y, 50);
  }

  function drawPetal() {
    p.beginShape();
    p.vertex(0, 0);
    p.bezierVertex(-18, -25, -20, -80, 0, -105);
    p.bezierVertex(20, -80, 18, -25, 0, 0);
    p.endShape(p.CLOSE);
  }
};

new p5(sketch2, "sketch-container-sk2");