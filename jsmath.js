function calcuLater(form) {

  var size = document.getElementById("size").value;
  var b = document.getElementById("freechlor").value;
  var c = document.getElementById("phval").value;
  var d = document.getElementById("alk").value;
  var e = document.getElementById("calc").value;
  var adjustments = '';
  var i;

  for (i = 0; i < 4; i++) {
    if (i = 0) {
      if (b < 5) { //3-4ppm ideally
        adjustments += (size / 400 * .51) + ' oz per 1ppm Chlorine needed.<br>';
      } else if (b > 7) {
        adjustments += (size / 400 * .17) + ' oz per desired decrease in Chlorine ppm.<br>';
      } else {
        adjustments += 'Chlorine levels fine!<br>'
      }
    } else if (i = 1) {
      if (c < 7.2) { //7.2-7.6 ideally
        adjustments += (size / 400 * .21) + ' oz Soda Ash per drop base pH demand needed.<br>';
      } else if (c > 7.7) {
        adjustments += (size / 400 * .37) + ' oz Muriatic per drop acid pH demand needed.<br>';
      } else {
        adjustments += 'pH is fine!<br>'
      }
    } else if (i = 2) {
      if (d < 80) { //pools:80-120 ideally
        adjustments += (size / 400 * .9) + ' oz Baking Soda per 10ppm Alkalinity increase needed.<br>';
      } else if (d > 120) {
        adjustments += (size / 400 * 1.02) + ' oz Muriatic per 20ppm Alkalinity decrease needed.<br>';
      } else {
        adjustments += 'Alkalinity is fine!<br>'
      }
    } else if (i = 3) {
      if (e < 180) { //pools:200-400, spas 250-350 spas, ideally
        adjustments += (size / 400 * .9) + ' oz Baking Soda per 10ppm Calcium increase needed.<br>';
      } else if (d > 350) {
        adjustments += (size / 400 * 1.02) + ' oz Muriatic per 20ppm Calcium decrease needed.<br>';
      } else {
        adjustments += 'Calcium levels are fine!'
      }
    } else {
      return false;
    }
  }
  document.getElementById("adjust").innerHTML = adjustments;
}
