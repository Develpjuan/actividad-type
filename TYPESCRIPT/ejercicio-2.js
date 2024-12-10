/*suma de las diagonales de una matriz*/
function sumDiagonals(matrix) {
    var sumPrincipal = 0;
    var sumSecondary = 0;
    for (var i = 0; i < matrix.length; i++) {
        sumPrincipal += matrix[i][i];
        sumSecondary += matrix[i][matrix.length - 1 - i];
    }
    return { diagonalPrincipal: sumPrincipal, diagonalSecondary: sumSecondary };
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var _a = sumDiagonals(matrix), diagonalPrincipal = _a.diagonalPrincipal, diagonalSecondary = _a.diagonalSecondary;
console.log("Sum diagonal Principal: ".concat(diagonalPrincipal));
