var age = 0;

do {
  age = prompt('Quel est votre âge?');
  if (age != parseInt(age) || parseInt(age) <= 0) {
    alert('Veuillez entrer un nombre entier positif!');
  }
} while (age != parseInt(age) || parseInt(age) <= 0);

age = parseInt(age);

if (age < 18) {
  alert('Vous n\'êtes pas encore majeur­·e.');
} else if (age < 50) {
  alert('Vous êtes majeur·e mais pas encore sénior·e.');
} else if (age < 60) {
  alert('Vous êtes sénior·e mais pas encore retraité·e.');
} else {
  alert('Vous êtes retraité·e, profitez de votre temps libre !');
}
