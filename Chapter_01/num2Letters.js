function num2Letters(number) {
  if (isNaN(number)) {
    return 'Veuillez entrer un nombre.';
  } else if (number < 0 || 999999999999 < number) {
    return 'Veuillez entrer un nombre compris entre 0 et 999999999999.';
  } else if (number === 0) {
    return 'zero';
  }

  var h = number;
  h %= 1000;
  h /= 1;
  var t = number - h;
  t %= 1000000;
  t /= 1000;
  var m = number - h - (t * 1000);
  m %= 1000000000;
  m /= 1000000;
  var b = number - h - (t * 1000) - (m * 1000000);
  b %= 1000000000000;
  b /= 1000000000;

  var result = '';

  result += (b > 0) ? h2Letters(b, false) + '-milliard' : '';
  result += (b > 1) ? 's' : '';

  result += (b > 0 && (m > 0 || t > 0 || h > 0)) ? '-' : '';
  result += (m > 0) ? h2Letters(m, false) + '-million' : '';
  result += (m > 1) ? 's' : '';

  result += (m > 0 && (t > 0 || h > 0)) ? '-' : '';
  result += (t > 0) ? h2Letters(t, false) + '-mille' : '';

  result += (t > 0 && h > 0) ? '-' : '';
  result += (h > 0) ? h2Letters(h, true) : '';

  return result;
}

function h2Letters(number, end) {
  var units = ['', 'un', 'deux', 'trois', 'quatre',
   'cinq', 'six', 'sept', 'huit', 'neuf',
   'dix', 'onze', 'douze', 'treize', 'quatorze',
   'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];

  var tens = ['', '', 'vingt', 'trente', 'quarante',
  'cinquante', 'soixante', 'soixante', 'quatre-vingt',
  'quatre-vingt'];

  var u = number;
  u %= 10;
  u /= 1;
  var t = number - u;
  t %= 100;
  t /= 10;
  var h = number - u - (t * 10);
  h %= 1000;
  h /= 100;

  var result = '';

  result += (h > 1) ? units[h] + '-' : '';
  result += (h > 0) ? 'cent' : '';
  result += (h > 1 && t === 0 && u === 0 && end) ? 's' : '';

  result += (h > 0 && (t > 0 || u > 0)) ? '-' : '';
  result += tens[t];

  result += (t === 2 && u === 0 && h > 0 && end) ? 's' : '';
  result += (t === 8 && u === 0 && end) ? 's' : '';
  result += (u === 1 && t > 1 && t !== 8 && t !== 9) ? '-et' : '';

  result += (u > 0 && t > 1) ? '-' : '';
  result += (u === 0 && t === 9) ? '-' : '';
  result += (t === 1 || t === 7 || t === 9) ? units[u + 10] : units[u];

  return result;
}

var userEntry;

while (userEntry = prompt('Nombre:')) {
  alert(num2Letters(parseInt(userEntry, 10)));
}
