var grid = [];

var xSize = 4;
var ySize = 4;
var UP = 1;
var DOWN = 2;
var LEFT = 3;
var RIGHT = 4;

$(document).ready(function(){
	setUpBoard();
	printBoard();
});

function setUpBoard(){

	// initialize board to have no values
	for(var i=0; i<xSize; i++){
		var innergrid = [];
		for(var j=0; j<ySize; j++){
			innergrid.push(0);
		}
		grid.push(innergrid);
	}
	
	addRandomTile(grid);
	addRandomTile(grid);
}

function printBoard(){
	
		for (var i = 0; i < 4; i++){
			for (var j = 0; j < 4; j++){
				var boardID = "r" + i + "c" + j;
				if (grid[i][j] == 0){
					document.getElementById(boardID).style.color = '#bbada0';
					document.getElementById(boardID).style.background = '#bbada0';
					//document.getElementById(boardID).style.border = "#FFB6C1";
				}
				else if (grid[i][j] == 2){
					document.getElementById(boardID).style.color = "#800000";
					document.getElementById(boardID).style.background = "#FFC0CB";
				}
				else if (grid[i][j] == 4){
					document.getElementById(boardID).style.color = "#8B0000";
					document.getElementById(boardID).style.background = "#FAEBD7";
				}
				else if (grid[i][j] == 8){
					document.getElementById(boardID).style.color = "#A52A2A";
					document.getElementById(boardID).style.background = "#F5F5DC";
				}
				else if (grid[i][j] == 16){
					document.getElementById(boardID).style.color = "#B22222";
					document.getElementById(boardID).style.background = "#FFE4C4";
				}
				else if (grid[i][j] == 32){
					document.getElementById(boardID).style.color = "#DC143C";
					document.getElementById(boardID).style.background = "#FFEBCD";
				}
				else if (grid[i][j] == 64){
					document.getElementById(boardID).style.color = "#FF0000";
					document.getElementById(boardID).style.background = "#F5DEB3";
				}
				else if (grid[i][j] == 128){
					document.getElementById(boardID).style.color = "#FF6347";
					document.getElementById(boardID).style.background = "#FFF8DC";
				}
				else if (grid[i][j] == 256){
					document.getElementById(boardID).style.color = "#FF7F50";
					document.getElementById(boardID).style.background = "#FFFACD";
				}
				else if (grid[i][j] == 512){
					document.getElementById(boardID).style.color = "#CD5C5C";
					document.getElementById(boardID).style.background = "#FAFAD2";
				}
				else if (grid[i][j] == 1024){
					document.getElementById(boardID).style.color = "#F08080";
					document.getElementById(boardID).style.background = "#FFFFE0";
				}
				else if (grid[i][j] == 2048){
					document.getElementById(boardID).style.color = "#E9967A";
					document.getElementById(boardID).style.background = "#8B4513";
				}
				else{
				}
				document.getElementById(boardID).innerHTML = grid[i][j];
				
			}
		}
		
		for (var row = 0; row < 4; row++){
			for (var col = 0; col < 4; col++){
			var boardID = "r" + i + "c" + j;
			if (grid[i][j] == 2){
				document.getElementById(boardID).style.background = "#FFFFFF";
			}
			else if (grid[i][j] == 4){
				document.getElementById(boardID).style.background = "#FFFFFF";
			}
			else if (grid[i][j] == 8){
				document.getElementById(boardID).style.background = "#FFFFFF";
			}
			else if (grid[i][j] == 16){
				document.getElementById(boardID).style.background = "#FFFFFF";
			}
			else if (grid[i][j] == 32){
				document.getElementById(boardID).style.background = "#FFFFFF";
			}
			else if (grid[i][j] == 64){
				document.getElementById(boardID).style.background = "#FFFFFF";
			}
			else if (grid[i][j] == 128){
				document.getElementById(boardID).style.background = "#FFFFFF";
			}
			else if (grid[i][j] == 256){
				document.getElementById(boardID).style.background = "#FFFFFF";
			}
			else if (grid[i][j] == 512){
				document.getElementById(boardID).style.background = "#FFFFFF";
			}
			else if (grid[i][j] == 1024){
				document.getElementById(boardID).style.background = "#FFFFFF";
			}
			else if (grid[i][j] == 2048){
				document.getElementById(boardID).style.background = "#FFFFFF";
			}
			else{
			}
		}
	}
	
}

function getEmptyPos (grid){
	var emptyPos = [];
	
	for (var i = 0; i < grid.length; i++){
		for (var j = 0; j < grid[i].length; j++){
			if (grid[i][j] == 0){
				emptyPos.push({x: i, y: j});
			}
		}
	}
	return emptyPos;
}

function nextMovePos(grid) {
    for (var x = 0; x < xSize; x++) {
        for (var y = 0; y < ySize; y++) {
            if (x > 0 && grid[x][y] === grid[x - 1][y]) {
                return true;
            }
            if (y > 0 && grid[x][y] === grid[x][y - 1]) {
                return true;
            }
        }
    }
    return false;
};

function addRandomTile(grid) {
    var emptyPositions = getEmptyPos(grid);
    var n = Math.floor(Math.random() * emptyPositions.length);
    var position = emptyPositions[n];
    grid[position.x][position.y] = 2;
    if (emptyPositions.length === 1 && !nextMovePos(grid)) {
        var result = "lose";
    }
};
	
var direction = 0;

function checkKey(e) {
	e = e || window.event;
	if (e.keyCode == '38') {
		// up arrow
		moveBoard(UP);
		console.log("up");
		if (nextMovePos(grid)){
			addRandomTile(grid);
		}
		else{
			alert("You lose!");
		}
		printBoard();
	}
	else if (e.keyCode == '40') {
		// down arrow
		moveBoard(DOWN);
		console.log("down");
		if (nextMovePos(grid)){
			addRandomTile(grid);
		}
		else{
			alert("You lose!");
		}
		printBoard();
	}
	else if (e.keyCode == '37') {
		// left arrow
		moveBoard(LEFT);
		console.log("left");
		if (nextMovePos(grid)){
			addRandomTile(grid);
		}
		else{
			alert("You lose!");
		}
		printBoard();
	}
	else if (e.keyCode == '39') {
		// right arrow
		moveBoard(RIGHT);
		console.log("right");
		if (nextMovePos(grid)){
			addRandomTile(grid);
		}
		else{
			alert("You lose!");
		}
		printBoard();
	}
}

function moveBoard(direction){
	if (direction === UP){
		for (var row = 1; row < grid.length; row++){
			for (var col = 0; col < grid[row].length; col++){
				if (grid[row-1][col] == 0){
					grid[row-1][col] = grid[row][col];
					grid[row][col] = 0;
				}
				else if (grid[row-1][col] == grid[row][col]){
					grid[row-1][col] = grid[row][col] * 2;
					grid[row][col] = 0;
				}
			}
			
		}
	}
	else if (direction === DOWN){
		for (var row = grid.length - 2; row >= 0; row--){
			for (var col = 0; col < grid[row].length; col++){
				if (grid[row+1][col] == 0){
					grid[row+1][col] = grid[row][col];
					grid[row][col] = 0;
				}
				else if (grid[row+1][col] == grid[row][col]){
					grid[row+1][col] = grid[row][col] * 2;
					grid[row][col] = 0;
				}
			}
		}
	}
	else if (direction === LEFT){
		for (var row = 0; row < grid.length; row++){
			for (var col = 1; col < grid[row].length; col++){
				if (grid[row][col-1] == 0){
					grid[row][col-1] = grid[row][col];
					grid[row][col] = 0;
				}
				else if (grid[row][col-1] == grid[row][col]){
					grid[row][col-1] = grid[row][col] * 2;
					grid[row][col] = 0;
				}
			}
		}
		
	}
	else if (direction === RIGHT){ //right
		for (var row = 0; row < grid.length; row++){
			for (var col = grid[row].length - 2; col >= 0; col--){
				if (grid[row][col+1] == 0){
					grid[row][col+1] = grid[row][col];
					grid[row][col] = 0;
				}
				else if (grid[row][col+1] == grid[row][col]){
					grid[row][col+1] = grid[row][col] * 2;
					grid[row][col] = 0;
				}
			}
		}
	}
}