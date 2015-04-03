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
  var factorial = function(count)
  {
    if(count === 1 || count === 0)
    {
      return 1;
    }
    else
    {
      return count * factorial(count - 1);
    }
  }

  return factorial(n);
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
          return testResult.rows();
        }
    }
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(result));
  return result.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
   //Keeps track of the # of valid solutions
  var count = 0;

  //Helps identify valid solutions
  var done = Math.pow(2,n) - 1;

  //Checks all possible board configurations
  var innerRecurse = function(ld, col, rd) {

    //All columns are occupied,
    //so the solution must be complete
    if (col === done) {
      count++;
      return;
    }

    //Gets a bit sequence with "1"s
    //whereever there is an open "slot"
    var poss = ~(ld | rd | col);

    //Loops as long as there is a valid
    //place to put another queen.
    while ( poss & done ) {
      var bit = poss & -poss;
      poss -= bit;
      innerRecurse((ld|bit)>>1, col|bit, (rd|bit)<<1);
    }
  };

  innerRecurse(0,0,0);

  return count;
};
