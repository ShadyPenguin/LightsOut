board = {
  tilesArray : [],
 
  startGame : function($el) {
    this.$tiles = $el
    this.addIndex();
    this.size = this.$tiles.length;
    // if($('.random').length>0){
      this.generate();      
    // }
    this.clickMe();
  },

  clickMe : function() {
    $('.tile').on('click', function() {
      var row = $(this).data('index')[0];
      var col = $(this).data('index')[1];

      board.tilesArray[row][col].toggleTiles(row,col);
      board.render();
    })
  },
 
  addIndex : function() {
    this.$tiles.each(function(index) {
      $(this).data('index',[Math.floor(index/5),index%5]);
    });
  },

  generate : function() {
    var row = [];
    this.$tiles.each(function() {
      if(row.length < 5) {
        row.push(new Tile($(this)));
      } else {
        board.tilesArray.push(row);
        row = [];
        row.push(new Tile($(this)));
      }
    });
    this.tilesArray.push(row);
    this.render();
  },

  // Refactor this to generate map once
  // new function would act recursively to render
  // tiles that are clicked, and the ones touching it
  render : function() {
    $(this.tilesArray).each(function() {
      $(this).each(function() {
        $(this.domElement).removeClass();
        $(this.domElement).addClass("tile "+this.status); 
      })
    })
  }
}
