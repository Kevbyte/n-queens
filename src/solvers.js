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
  var newBoard = new Board({n:n});

  // How to do we check non-horiztontals & verticals
  // Start at one corner

  var placeRooks = function(index, board) {
    if (board[index].length === 1) {
      newBoard.togglePiece(0,0);
      return newBoard.rows();
    } else { 
      for (var i = 0; i < board[index].length; i++) {
        var updatedBoard;
        // If board doesnt have any conflicts with this row configuration then toggle 
        newBoard.togglePiece(index, i);

        if (newBoard.hasAnyRooksConflicts()) {
          newBoard.togglePiece(index, i);
        } else {
            updatedBoard = newBoard.rows();
            if (index < n - 1) {
              placeRooks(index + 1, updatedBoard);
            }
            return newBoard.rows();
        }
      }
    }
  };
  console.log(newBoard.rows())
  return placeRooks(0, newBoard.rows());

};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});

  var searchBoard = function(startRow){
    if(startRow === n){
      solutionCount++;
      return;
    }
    for(var i=0; i<n; i++){
      board.togglePiece(startRow, i);
      if(!board.hasAnyRooksConflicts()){
        searchBoard(startRow+1);
      }
      board.togglePiece(startRow, i);  
    }
  }

  searchBoard(0)

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
