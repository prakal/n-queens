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
  return collections.length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var innerFunction = function(rowStartIndex, columnStartIndex)
  {
    var solution = new Board({"n":n});
    var count = 0;
    var rowIndex = rowStartIndex;

    for(var i = 0; i < n ;i++)
    {
      var colIndex = columnStartIndex;
      for(var j = 0; j < n; j++)
      {
        solution.togglePiece(rowIndex,colIndex);
        count++;
        if(solution.hasAnyQueenConflictsOn(rowIndex,colIndex))
        {
          solution.togglePiece(rowIndex,colIndex);
          count--;
        }
        colIndex = (colIndex + 1) % n;
      }
      rowIndex = (rowIndex + 1) % n;
    }

    if(count === n)
      return solution;
    else
      return null;
  }

  var result = new Board({"n":n});
  for(var t = 0; t < n; t++)
  {
    for(var k = 0; k < n; k++)
    {
        var testResult = innerFunction(t, k);
        if(testResult !== null)
        {
          result = testResult;
        }
    }
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(result));
  return result.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  n = n || 1;
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
      if(!newBoard.hasAnyQueenConflictsOn(row, i))
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
  return collections.length;
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
