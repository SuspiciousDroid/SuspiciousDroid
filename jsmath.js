document.getElementsByName("calc").onclick = calcuLater;

function calcuLater() {
  var size = document.getElementsByName("size");
  var b = document.getElementsByName("freechlor");
  var c = document.getElementsByName("phval");
  var d = document.getElementsByName("alk");
  var e = document.getElementsByName("calc");
  var freechlor, phval, alk, calcium;
    for (i = 0, i < 4; i++){
        if (i = 0) {
            if (b < 5) {                  //3-4ppm ideally
                freechlor = (size / 400 * .51).toString() + ' oz per 1ppm needed.';
            } else if (b > 10) {
                freechlor = (size / 400 * .17).toString() + ' oz per desired decrease in ppm.';
            }
            return freechlor;
        } else if (i = 1){
            if (c < 7.2) {                //7.2-7.6 ideally
                phval = (size / 400 * .21).toString() + ' oz Soda Ash per drop base demand needed.';
            } else if (c > 7.7) {
                phval = (size / 400 * .37).toString() + ' oz Muriatic per drop acid demand needed.';
            }
            return phval;
        } else if (i = 2) {
            if d < 80 {                //pools:80-120 ideally
                alk = (size / 400 * .9).toString() + ' oz Baking Soda per 10ppm increase needed.';
            } else if d > 120 {
                alk = (size / 400 * 1.02).toString() + ' oz Muriatic per 20ppm decrease needed.';
            }
            return alk;
        } else if (i = 3) {
            if (e < 180) {               //pools:200-400, spas 250-350 spas, ideally
                calcium = (size / 400 * .9 +).toString() + ' oz Baking Soda per 10ppm increase needed.';
            } else if d > 350 {
                calcium = (size / 400 * 1.02).toString() + ' oz Muriatic per 20ppm decrease needed.';
            }
            return calcium;
        }
    } var adjustments = freechlor + phval + alk + calcium;
      document.getElementById("adjustments").innerHTML = adjustments;
}