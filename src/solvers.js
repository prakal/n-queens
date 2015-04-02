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

window.findNRooksSolution = function(n, index) {
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
        j = currentRow.length;
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



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var allSolutions = [];


  for (var a = 0; a < n; a++){
    var solution = findNRooksSolution(n,a);
    console.dir(solution);
    if (solution !== null){
      console.log("Add solution");
      allSolutions.push(solution);
    }
  }

  console.log('Number of solutions for ' + n + ' rooks:', allSolutions.length);
  return allSolutions.length;
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
