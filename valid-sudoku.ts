function isValidSudoku(board: string[][]): boolean {
  // create rows object
  const rows = {};
  // create columns object
  const cols = {};
  // create squares object
  const squares = {};

  // iterate through rows
  for (let r = 0; r < 9; r++) {
      // iterate through columns
      for (let c = 0; c < 9; c++) {
          let char = board[r][c]; // alias for current character
          let squareIndex = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`; // alias for current square coordinates
          // the current space is empty, continue
          if (char === ".") {
              continue;
          }

          // if a set doesn't yet exist for the current row, column, or square, create one
          if (rows[r] === undefined) {
              rows[r] = new Set();
          }

          if (cols[c] === undefined) {
              cols[c] = new Set();
          }

          if (squares[squareIndex] === undefined) {
              squares[squareIndex] = new Set();
          }

          // if the current char is a duplicate in the current row, column, or square
          if (rows[r].has(char) || cols[c].has(char) || squares[squareIndex].has(char)) {
              // return false
              return false;
          }

          // add the current char to the appropriate set
          rows[r].add(char);
          cols[c].add(char);
          squares[squareIndex].add(char);
      }
  }
  // return true
  return true;
};