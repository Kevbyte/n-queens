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
  var board = new Board({n:n});

  var searchBoard = function(startRow){

    if(startRow === n){
      solution = board.rows();
      return solution;
    }
    for(var i=0; i<n; i++){
      board.togglePiece(startRow, i);
      if(!board.hasAnyQueensConflicts()){
        var result = searchBoard(startRow+1);
        if (result) {
          return result;
        }
      }
      board.togglePiece(startRow, i);  
    }
    return solution;
  };


  if (n === 2 || n === 3) {
      return board.rows();
    } else{
      var temp = searchBoard(0);
      console.log(temp)
      return temp;
    }
  
  // console.log(solution)
  // return solution;
};
  // var solution = undefined;
  // var board = new Board({n:n});
  // var err = false;

  // var searchBoard = function(startRow, chessBoard){
    

  //   if(startRow === n){
  //     solution = board.rows();
  //     console.log(n);
  //     console.log(solution)
  //     return solution;
  //   }
  //   //recursive case
  //   for(var i=0; i<n; i++){
  //     board.togglePiece(startRow, i);
  //     if(board.hasAnyQueensConflicts()){
  //       // console.log(board.rows())
  //       board.togglePiece(startRow, i); 
  //     }else{
  //       // console.log(board.rows())
  //       err = false;
  //       searchBoard(startRow+1, board.rows());
  //     }
  //     if (err) {
  //       board.togglePiece(startRow, i);
  //       err = false;
  //     }
  //   }
  //   err = true;
  //   return board.rows();

  // }

  // if (n === 0) {
  //   return [];
  // }
  // if (n === 1) {
  //   return [[1]];
  // }else{
  //   searchBoard(0, board.rows());
  //   return solution;
  // }
  // var solution = undefined;
  // var board = new Board({n:n});

  //   var searchBoard = function(startRow){
  //   if(startRow === n){
  //     solution = board.rows();
  //     console.log("solution")
  //     console.log(board.rows())
  //     return;
  //   }
  //   for(var i=0; i<n; i++){
  //     board.togglePiece(startRow, i);
  //     if(board.hasAnyQueensConflicts()){
  //       board.togglePiece(startRow, i);
  //     }else{
  //       searchBoard(startRow+1);
  //     } 

  //     console.log("test")
  //     console.log(board.rows())       
  //   }
  // }

  // searchBoard(0);
  // return solution;



// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});

  var searchBoard = function(startRow){
    if(startRow === n){
      solutionCount++;
      return;
    }
    for(var i=0; i<n; i++){
      board.togglePiece(startRow, i);
      if(!board.hasAnyQueensConflicts()){
        searchBoard(startRow+1);
      }
      board.togglePiece(startRow, i);  
    }
  }

  searchBoard(0)

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};




















