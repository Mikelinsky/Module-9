var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var table = document.getElementsByTagName('li');
	element.innerHTML = 'Item ' +  table.length;
	list.appendChild(element);
})