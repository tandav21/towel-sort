
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix == undefined || matrix === null || matrix.length == 0) {
  return [];
  }
    for (let i = 0; i < matrix.length; i++ ) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i == 1) {
          arr.push(matrix[i][matrix[i].length - j - 1]);
        }
        else {
          arr.push(matrix[i][j]);
        }
      }
    }
    return arr;
  }