
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix == undefined || matrix === null || matrix.length == 0) {
  return [];
  }
    for (let x = 0; x < matrix.length; x++ ) {
      for (let j = 0; j < matrix[x].length; j++) {
        arr.push(matrix[x][j]);
      }
      if (x = 1) {
       for (let j = matrix[x].length - 1; j >= 0; j--) {
        arr.push(matrix[x][j]);
        }
      }
      return arr;
    }
    }
