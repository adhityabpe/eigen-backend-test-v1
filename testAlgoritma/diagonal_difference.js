
function diagonalDifference(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - 1 - i];
    }
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

// Test cases
const matrix1 = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(diagonalDifference(matrix1));
const matrix2 = [
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1]
];
console.log(diagonalDifference(matrix2));

const matrix3 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];
console.log(diagonalDifference(matrix3));
