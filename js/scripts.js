var heightOfTree = prompt('Enter height of tree');

function drawTree(heightOfTree) {
    for (var i = 0; i < heightOfTree; i++) {
        var star = '*';
        for (var j = 0; j < i; j++) {
            star += '*';
        }
        console.log(star);
    }
}
drawTree(heightOfTree);




