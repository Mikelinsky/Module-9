var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

var uppercase = dinosaur.toUpperCase();
console.log(uppercase);

var newText = text.replace('Velociraptor', uppercase);
console.log(newText);

var halfText = newText.length/2;
console.log(halfText);
console.log(newText.length);

var readyText = newText.slice(0, 72);

console.log(readyText);