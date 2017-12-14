function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        return('Incorrect data');
    }
    return (a * h / 2);
}
console.log(getTriangleArea(10, 6));

var triangleArea = getTriangleArea(10,15);
console.log(triangleArea);

var triangleArea = getTriangleArea(4,2);
console.log(triangleArea);

var triangleArea = getTriangleArea(12,36);
console.log(triangleArea);

var triangleArea = getTriangleArea(0, 4);
console.log(triangleArea);