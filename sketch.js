function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10); // Fondo oscuro
  strokeWeight(2); // Líneas más delgadas

  for (let x = 50; x <= width - 50; x += 50) {
    for (let y = 50; y <= height - 50; y += 50) {
      let distance = dist(mouseX, mouseY, x, y);
      let length = map(distance, 0, width / 2, 10, 100);
      let hue = map(distance, 0, width, 0, 255);
      let angle = atan2(mouseY - y, mouseX - x);
      stroke(hue, 200, 255 - hue);
      push();
      translate(x, y);
      rotate(angle);
      line(0, 0, length, 0);
      pop();
    }
  }
}
