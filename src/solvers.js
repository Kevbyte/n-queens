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
  var solution = undefined;
  var newBoard = new Board({n:n})

  // How to do we check non-horiztontals & verticals
  // Start at one corner
  // console.log(newBoard.rows())
  var randomIndex = Math.floor(Math.random()*n);

  newBoard.rows()[0][randomIndex] = 1;

  for (var i = 0; i < newBoard.rows().length; i++) {
    for (var j = 0; j < n - 1; j++) {

      if (j !== i) {
        if(!newBoard.hasAnyRooksConflicts()) {
          newBoard.togglePiece(i, j);
          // newBoard.rows()[i + 1][j] = 1;
          //j = n;
        } 
      }  
    }
  }

  console.log(newBoard.rows())
  // 
  // console.log(solution)
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return newBoard.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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
