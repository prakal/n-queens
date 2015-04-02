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

window.findNRooksSolution = function(n) {
  var solution = new Board({"n":n});
  var matrix = solution.rows();
  for(var i = 0; i < matrix.length ;i++)
  {
    for(var j = 0; j < matrix.length; j++)
    {
      solution.togglePiece(i,j);
      if(solution.hasColConflictAt(j) || solution.hasRowConflictAt(i))
        solution.togglePiece(i,j);
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  return solution.rows();
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
/*
  var collections = [];
  var board = new Board({"n":n});
  // console.log("1");
  var innerFunction = function(row, matrix) {

    for(var i = 0; i < n ; i++)
    {
      var newMatrix = [];
      for (var a = 0; a < matrix.length; a++) {
          newMatrix[a] = matrix[a].slice();
      }

      var newBoard = new Board(newMatrix);
      newBoard.togglePiece(row, i);
      // console.log("3: " + i + " " + row + " " + newMatrix);
      if(!newBoard.hasColConflictAt(i))
      {
        // console.log("4");
        // console.log("new Matrix: " + newBoard.rows());
        if(row === n - 1)
        {
          // console.log("6");
          collections.push(newBoard);

        }
        else {
          // console.log("7");

          innerFunction(row + 1, newBoard.rows());
        }
      }
      else
      {
        // console.log("hit nothing");
      }
    }
  }
  // console.log("5");
  innerFunction(0, board.rows());

  // console.log('Number of solutions for ' + n + ' rooks:', collections.length);
  return collections.length;*/
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({"n":n});
  var matrix = solution.rows();
  var count = 0;
  var startCounter = 0;
  while(count < n && startCounter < n * n)
  {
    solution = new Board({"n":n});
    count = 0;
    tempCounter = 0;
    var rowCounter = startCounter % n;
    for(var i = 0; i < n ;i++)
    {
      for(var j = 0; j < n; j++)
      {
        solution.togglePiece(rowCounter,j);
        count++;
        if(solution.hasAnyQueenConflictsOn(rowCounter,j))
        {
          solution.togglePiece(rowCounter,j);
          count--;
        }
      }
      rowCounter = (rowCounter + 1) % n;
    }
    console.log("count " + count);
    console.log(JSON.stringify(solution));
    startCounter++;
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

  return solution.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
