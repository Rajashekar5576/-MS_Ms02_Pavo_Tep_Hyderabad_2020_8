var puzzle = [
    [0,0,0,2,6,0,7,0,1],
    [6,8,0,0,7,0,0,9,0],
    [1,9,0,0,0,4,5,0,0],
    [8,2,0,1,0,0,0,4,0],
    [0,0,4,6,0,2,9,0,0],
    [0,5,0,0,0,3,0,2,8],
    [0,0,9,3,0,0,0,7,4],
    [0,4,0,0,5,0,0,3,6],
    [7,0,3,0,1,8,0,0,0]];

function sudokuSolver(puzzle){
var nonPossibilities = {},impossibleNumbers, emptySpaces = 81;
while (emptySpaces > 0) {
emptySpaces = 0;
for(var vert = 0; vert < puzzle.length; vert++){
for(var horz = 0; horz < puzzle.length; horz++){
    if (puzzle[vert][horz] === 0) {
        nonPossibilities = {};
        for(var i = 0; i < 9; i++) {
            if (puzzle[vert][i] > 0) {
                nonPossibilities[puzzle[vert][i]] = true;
            }
            if (puzzle[i][horz] > 0) {
                nonPossibilities[puzzle[i][horz]] = true;
            }
        }
        for(var vertBox = Math.floor(vert / 3) * 3; vertBox < Math.floor(vert / 3) * 3 + 3; vertBox++){
            for(var horzBox = Math.floor(horz / 3) * 3; horzBox < Math.floor(horz / 3) * 3 + 3; horzBox++){
                if (puzzle[vertBox][horzBox]) {
                    nonPossibilities[puzzle[vertBox][horzBox]] = true;
                }
            }
        }
        impossibleNumbers = Object.keys(nonPossibilities);
        if (impossibleNumbers.length === 8){
            for(var i = 0; i < 10; i++) {
                if (impossibleNumbers.indexOf(i.toString()) < 0) {
                    puzzle[vert][horz] = i;
                }
            } 
        }
        else {
            emptySpaces++;
        }
    }
}
}
}
return puzzle;
}



console.log(sudokuSolver(puzzle)); 
