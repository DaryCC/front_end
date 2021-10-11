var CircleOps = function() {
  // --- Private stuff
  var pi = 3.1415926;
  var radSquare = function(rad) {
    return rad * rad;
  }

  // --- Public stuff
  return {
    PI: pi,
    calcArea: function(rad) {
      return pi * radSquare(rad);
    },
    calcPerimeter: function(rad) {
      return pi * 2 * rad;
    }
  };
}();

var x = 1.5;

var area = CircleOps.calcArea(x);
var perim = CircleOps.calcPerimeter(x);
var pi = CircleOps.PI;
console.log("value of PI: " + pi);
console.log("%c" + "area: " + area, "color:red; background-color:black;");
console.log("perimeter: " + perim);
