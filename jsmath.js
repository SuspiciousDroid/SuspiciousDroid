var a = size;
var b = freechlor;
var c = phval;
var d = alk;
var e = calcium;
var f = algae;
var adjustments;

function calculateChlor(a, b) {
if b < 4 {                  //3-4ppm ideally
var add = a / 400 * .51 + ' oz per 1ppm needed.';
} else {
var add = a / 400 * .17 + ' oz per desired decrease in ppm.';
}
return add;
}

function calculatepH(a, b) {
if c < 7.2 {                //7.2-7.6 ideally
var add = a / 400 * .21 + ' oz Soda Ash per drop base demand needed.';
} else if c > 7.7 {
var add = a / 400 * .37 + ' oz Muriatic per drop acid demand needed.';
}
return add;
}

function calculateAlk(a, b) {
if d < 80 {                //pools:80-120 ideally
var add = a / 400 * .9 + ' oz Baking Soda per 10ppm increase needed.';
} else if d > 120 {
var add = a / 400 * 1.02 + ' oz Muriatic per 20ppm decrease needed.';
}
return add;
}

function calculateCalcium(a, b) {
if e < 80 {               //pools:200-400, spas 150-250 spas, ideally
var add = a / 400 * .9 + ' oz Baking Soda per 10ppm increase needed.';
} else if d > 120 {
var add = a / 400 * 1.02 + ' oz Muriatic per 20ppm decrease needed.';
}
return add;
}
adjustments = function calculateChlor() + function calculatepH() + function calculateAlk() + function calculateCalcium();