var names = [];
var name;

while (name = prompt('Entrez un prénom :')) {
  names.push(name);
}

if (names.length > 0) {
  alert(names.join(' '));
} else {
  alert('Aucun prénom n\'a été entré.');
}
