function drawGridLayout(context) {
  context.save();

  context.fillStyle = 'black';

  // Draw white lines parallel to each axis every 10 pixels at the half-pixel.
  // This produces cleaner lines. See Dive Into HTML5 for a very good
  // explanation: http://diveintohtml5.org/canvas.html#pixel-madness
  context.strokeStyle = 'gray';
  context.beginPath();
  context.lineWidth = 0.5;
  // FIXME: What if the canvas has been translate()'d to a new origin
  // point? We could draw a line from -height to height and -width to
  // width, but this would only work if the origin point was divisible by
  // 10 here, and 100 later when we draw the black line every 100 pixels.
  for (i = 0.5; i < context.canvas.height; i += 10) {
    context.moveTo(-context.canvas.width, i);
    context.lineTo(context.canvas.width, i);
  }
  for (i = 0.5; i < context.canvas.width; i += 10) {
    context.moveTo(i, -context.canvas.height);
    context.lineTo(i, context.canvas.height);
  }
  for (i = 0.5; i > -context.canvas.height; i -= 10) {
    context.moveTo(-context.canvas.width, i);
    context.lineTo(context.canvas.width, i);
  }
  for (i = 0.5; i > -context.canvas.width; i -= 10) {
    context.moveTo(i, -context.canvas.height);
    context.lineTo(i, context.canvas.height);
  }
  context.stroke();

  // Draw black lines parallel to each axis every 100 pixels at the half-pixel.
  context.beginPath();
  context.strokeStyle = 'black';
  for (i = 0.5; i < context.canvas.height; i += 100) {
    context.moveTo(-context.canvas.width, i);
    context.lineTo(context.canvas.width, i);
  }
  for (i = 0.5; i < context.canvas.width; i += 100) {
    context.moveTo(i, -context.canvas.height);
    context.lineTo(i, context.canvas.height);
  }
  for (i = 0.5; i > -context.canvas.height; i -= 100) {
    context.moveTo(-context.canvas.width, i);
    context.lineTo(context.canvas.width, i);
  }
  for (i = 0.5; i > -context.canvas.width; i -= 100) {
    context.moveTo(i, -context.canvas.height);
    context.lineTo(i, context.canvas.height);
  }
  context.stroke();


  // Draw the x and y-axes in a thicker black line to make them stand out.
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 3;
  context.moveTo(-context.canvas.width+0.5, 0.5);
  context.lineTo(context.canvas.width+0.5, 0.5);
  context.moveTo(0.5, -context.canvas.height+0.5);
  context.lineTo(0.5, context.canvas.height+0.5);
  context.stroke();

  // Draw the x-axis directional arrow
  context.strokeStyle = 'black';
  context.beginPath();
  context.moveTo(20.5, 10.5);
  context.lineTo(60.5, 10.5);
  context.stroke();
  context.beginPath();
  context.moveTo(60.5, 10.5);
  context.lineTo(55.5, 15.5);
  context.lineTo(55.5, 5.5);
  context.closePath();
  context.fill();

  // Draw the y-axis directional arrow
  context.beginPath();
  context.moveTo(10.5, 20.5);
  context.lineTo(10.5, 60.5);
  context.stroke();
  context.beginPath();
  context.moveTo(10.5, 60.5);
  context.lineTo(15.5, 55.5);
  context.lineTo(5.5, 55.5);
  context.closePath();
  context.fill();

  // Draw the coordinates and axes labels
  context.font = '20px arial,sans-serif';
  context.textBaseline = 'top';
  context.fillText('x', 65, 0);
  context.fillText('y', 4.5, 60);
  context.fillText('0', 4.5, 0);
  for (i = 0; i < context.canvas.width; i += 100) {
    if ( i == 0 ) continue;
    context.fillText(i, i+3.5, 0);
  }
  for (i = 0; i < context.canvas.height; i += 100) {
    if ( i == 0 ) continue;
    context.fillText(i, 3.5, i);
  }
  for (i = 0; i > -context.canvas.width; i -= 100) {
    if ( i == 0 ) continue;
    context.fillText(i, i+3.5, 0);
  }
  for (i = 0; i > -context.canvas.height; i -= 100) {
    if ( i == 0 ) continue;
    context.fillText(i, 3.5, i);
  }

  context.restore();
}
