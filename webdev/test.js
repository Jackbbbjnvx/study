function drawLine() {
  const m = 1;
  const c = 0;
  for (x = 0; x < 400; x++) {
    let y = m * x + c;
    console.log("Value of x " + x + " Value of Y " + y);
  }
}

drawLine();
