document.body.addEventListener("click", sendAlert);

plane = document.getElementById("plane");

window.onload = drawLine;

const rect = plane.getBoundingClientRect();

function drawLine() {
  const m = 0.2;
  const c = 200;
  for (x = 0; x < 400; x++) {
    let y = (1 / 2) * 9.8 * x ** 2;
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      const dot = document.createElement("span");
      dot.style.position = "absolute";
      dot.className = "dot";
      dot.style.height = 1 + "px";
      dot.style.width = 1 + "px";
      dot.style.backgroundColor = "#ff0000";
      dot.style.left = x + "px";
      dot.style.top = 400 - y + "px";
      plane.appendChild(dot);
    }
  }
}

function sendAlert(e) {
  // alert(e.pageX + "px" + " " + e.pageY + "px");
  const dot = document.createElement("span");
  dot.style.position = "absolute";
  dot.className = "dot";
  dot.style.height = 1 + "px";
  dot.style.width = 1 + "px";
  dot.style.backgroundColor = "#ffffff";
  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";
  document.body.appendChild(dot);
}
