/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
/*
window.findNRooksSolution = function(n, index, columnIndex) {
  var solution = new Board({n:n});
  var matrix = solution.rows();
  index = index || 0;

  for(var i = 0; i < matrix.length ;i++)
  {
    var anyRookInRow = false;
    var currentRow = matrix[i];
    var count = index;
    for(var j = 0; j < currentRow.length; j++)
    {
      if(!solution.hasColConflictAt(count))
      {
        matrix[i][count] = 1;
        anyRookInRow = true;

      }
      count = (count + 1) % matrix.length;
    }
    if (anyRookInRow === false){
      return null;
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  solution = new Board(matrix); //fixme
  return solution;
};
*/
window.findNRooksSolution = function(n, matrix, collections) {

};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var collections = [];
  var board = new Board({"n":n});
  console.log("1");
  var innerFunction = function(row, matrix) {
    var newMatrix = [];
    for (var a = 0; a < matrix.length; a++) {
        newMatrix[a] = matrix[a].slice();
    }

    var newBoard = new Board(newMatrix);
    console.log("2");
    for(var i = 0; i < n ; i++)
    {
      console.log("3: " + i + " " + row + " " + n);
      if(!newBoard.hasColConflictAt(i))
      {
        console.log("4");
        newBoard.togglePiece(row, i);
        if(row === n - 1)
        {
          console.log("6");
          console.log(newMatrix);
          collections.push(newBoard);

        }
        else {
          console.log("7");


          console.log("8");
          innerFunction(row + 1, newBoard.rows());
        }
      }
      else
      {
        console.log("hit nothing");
      }
    }
  }
  console.log("5");
  innerFunction(0, board.rows());

  console.log('Number of solutions for ' + n + ' rooks:', collections.length);
  return collections.length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
