function Tile($el) {
  this.domElement = $el
  this.status = this.generateStatus();
}

Tile.prototype.generateStatus = function() {
  return ['on', 'off'][Math.floor(Math.random()*2)]
}

Tile.prototype.toggleTiles = function(row, col) {
  this.toggleSelf();
  this.toggleUp(row,col);
  this.toggleDown(row,col);
  this.toggleLeft(row,col);
  this.toggleRight(row,col);
}

Tile.prototype.toggleSelf = function() {
  if(this.status === 'on') {
    this.status = 'off';
  } else {
    this.status = 'on';
  }
}

Tile.prototype.toggleUp = function(row, col) {
  if(col>0){
    board.tilesArray[row][col-1].toggleSelf();
  }
}

Tile.prototype.toggleDown = function(row, col) {
  if(col<4){
    board.tilesArray[row][col+1].toggleSelf();
  }
}

Tile.prototype.toggleLeft = function(row, col) {
  if(row>0){
    board.tilesArray[row-1][col].toggleSelf();
  }
}

Tile.prototype.toggleRight = function(row, col) {
  if(row<4){
    board.tilesArray[row+1][col].toggleSelf();
  }
}


